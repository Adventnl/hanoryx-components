// Static analysis of a component module: its exports, props and the comments
// that describe them. Nothing is executed, so it is safe on any source file.
import fs from 'node:fs';
import { parse } from '@babel/parser';

const isComponentName = (n) => /^[A-Z][A-Za-z0-9]*$/.test(n);
const isHookName = (n) => /^use[A-Z0-9]/.test(n);

/** "/** text *​/" -> plain text (stars and the leading indent stripped). */
export function cleanComment(raw) {
  return raw
    .replace(/^\s*\/\*+!?/, '')
    .replace(/\*+\/\s*$/, '')
    .split('\n')
    .map((l) => l.replace(/^\s*\*\s?/, '').replace(/^\s{0,3}/, ''))
    .join('\n')
    .replace(/^\s*=+\s*$/gm, '')
    .trim();
}

function srcOf(code, n) {
  return code.slice(n.start, n.end).replace(/\s+/g, ' ').trim();
}

function propsOf(code, fn) {
  const first = fn.params?.[0];
  if (!first) return [];
  const out = [];
  const objectPattern = first.type === 'AssignmentPattern' ? first.left : first;
  if (objectPattern.type === 'ObjectPattern') {
    for (const p of objectPattern.properties) {
      if (p.type === 'RestElement') { out.push({ name: `...${p.argument.name}`, rest: true }); continue; }
      const key = p.key?.name ?? p.key?.value;
      let def = null;
      let local = key;
      if (p.value.type === 'AssignmentPattern') { def = srcOf(code, p.value.right); local = p.value.left.name ?? key; }
      else if (p.value.type === 'Identifier') local = p.value.name;
      else if (p.value.type === 'ObjectPattern') def = '{…}';
      out.push({ name: key, default: def, alias: local !== key ? local : undefined });
    }
  } else if (first.type === 'Identifier') {
    out.push({ name: first.name, object: true });
  }
  return out;
}

/** Leading block comments of a statement (last JSDoc-ish one wins). */
function leading(code, node) {
  const cs = (node.leadingComments || []).filter((c) => c.type === 'CommentBlock');
  return cs.length ? cleanComment(code.slice(cs[cs.length - 1].start, cs[cs.length - 1].end)) : null;
}

/**
 * @returns {{ file, header: string|null, exports: Array<{name, kind, props, doc, isDefault}> }}
 * kind: component | hook | function | const | class
 */
export function analyzeModule(file) {
  const code = fs.readFileSync(file, 'utf8');
  const ast = parse(code, { sourceType: 'module', plugins: ['jsx'], attachComment: true });
  const body = ast.program.body;
  const decls = new Map(); // local name -> {kind, props, doc}
  const describe = (node, name, doc) => {
    let fn = null;
    if (node.type === 'FunctionDeclaration') fn = node;
    else if (node.type === 'VariableDeclarator') {
      let init = node.init;
      // unwrap memo()/forwardRef()
      while (init && init.type === 'CallExpression' && init.arguments[0] && ['memo', 'forwardRef'].includes(init.callee.name ?? init.callee.property?.name)) init = init.arguments[0];
      if (init && (init.type === 'ArrowFunctionExpression' || init.type === 'FunctionExpression')) fn = init;
    }
    const kind = node.type === 'ClassDeclaration' ? 'class' : fn ? (isHookName(name) ? 'hook' : isComponentName(name) ? 'component' : 'function') : 'const';
    return { name, kind, props: fn && kind === 'component' ? propsOf(code, fn) : [], doc, params: fn && kind !== 'component' ? fn.params.map((p) => srcOf(code, p)) : undefined };
  };
  for (const n of body) {
    const node = n.type === 'ExportNamedDeclaration' || n.type === 'ExportDefaultDeclaration' ? n.declaration : n;
    if (!node) continue;
    const doc = leading(code, n);
    if (node.type === 'FunctionDeclaration' || node.type === 'ClassDeclaration') decls.set(node.id?.name, describe(node, node.id?.name, doc));
    else if (node.type === 'VariableDeclaration') for (const d of node.declarations) if (d.id.type === 'Identifier') decls.set(d.id.name, describe(d, d.id.name, doc));
  }
  const exports = [];
  const add = (name, isDefault, fallback) => {
    const d = decls.get(name) ?? fallback ?? { name, kind: 'const', props: [], doc: null };
    exports.push({ ...d, name, isDefault });
  };
  for (const n of body) {
    if (n.type === 'ExportNamedDeclaration') {
      if (n.declaration) {
        const d = n.declaration;
        if (d.id) add(d.id.name, false);
        else if (d.declarations) d.declarations.forEach((x) => x.id.type === 'Identifier' && add(x.id.name, false));
      }
      if (!n.source) for (const s of n.specifiers) { const ex = s.exported.name ?? s.exported.value; if (ex === 'default') add(s.local.name, true); else add(s.local.name === ex ? ex : ex, false, decls.get(s.local.name) && { ...decls.get(s.local.name), name: ex }); }
    } else if (n.type === 'ExportDefaultDeclaration') {
      const d = n.declaration;
      if (d.id) add(d.id.name, true, decls.get(d.id.name));
      else if (d.type === 'Identifier') add(d.name, true);
      else if (d.type === 'ArrowFunctionExpression' || d.type === 'FunctionExpression') exports.push({ name: 'default', kind: 'component', props: propsOf(code, d), doc: leading(code, n), isDefault: true });
      else exports.push({ name: 'default', kind: 'const', props: [], doc: leading(code, n), isDefault: true });
    }
  }
  // de-duplicate (named + default of the same thing)
  const seen = new Map();
  for (const e of exports) {
    const prev = seen.get(e.name);
    if (!prev) seen.set(e.name, e);
    else if (e.isDefault) prev.isDefault = true;
  }
  // the module's own header: first block comment of the file that is not attached to an export
  let header = null;
  const firstNonImport = body.find((n) => n.type !== 'ImportDeclaration');
  const lc = firstNonImport?.leadingComments?.filter((c) => c.type === 'CommentBlock') ?? [];
  if (lc.length > 1 || (lc.length === 1 && /={4,}/.test(lc[0].value))) header = cleanComment(code.slice(lc[0].start, lc[0].end));
  return { file, header, exports: [...seen.values()], code };
}

/** First sentence-ish summary of a comment. */
export function summarize(text, max = 240) {
  if (!text) return '';
  const para = text.split(/\n\s*\n/)[0].replace(/\s+/g, ' ').trim();
  if (para.length <= max) return para;
  const cut = para.slice(0, max);
  const end = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('; '));
  return (end > 60 ? cut.slice(0, end + 1) : cut.replace(/\s+\S*$/, '') + '…');
}
