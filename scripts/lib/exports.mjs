// List the exports of a JS/JSX module without executing it.
import fs from 'node:fs';
import path from 'node:path';
import { parse } from '@babel/parser';

/** @returns {{ named: string[], defaultName: string|null, hasDefault: boolean }} */
export function readExports(file) {
  const code = fs.readFileSync(file, 'utf8');
  const ast = parse(code, { sourceType: 'module', plugins: ['jsx'] });
  const named = [];
  let defaultName = null;
  let hasDefault = false;
  for (const n of ast.program.body) {
    if (n.type === 'ExportNamedDeclaration') {
      if (n.declaration) {
        const d = n.declaration;
        if (d.type === 'FunctionDeclaration' || d.type === 'ClassDeclaration') named.push(d.id.name);
        else if (d.type === 'VariableDeclaration') d.declarations.forEach((x) => x.id.type === 'Identifier' && named.push(x.id.name));
      }
      for (const s of n.specifiers) {
        const exported = s.exported.name ?? s.exported.value;
        if (exported === 'default') { hasDefault = true; defaultName = s.local?.name ?? null; }
        else named.push(exported);
      }
    } else if (n.type === 'ExportDefaultDeclaration') {
      hasDefault = true;
      const d = n.declaration;
      defaultName = d.id?.name ?? (d.type === 'Identifier' ? d.name : null);
    } else if (n.type === 'ExportAllDeclaration') {
      // re-export: treated as opaque
    }
  }
  return { named, defaultName, hasDefault, file };
}

export function walk(dir, filter = () => true, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, filter, out);
    else if (filter(p)) out.push(p);
  }
  return out;
}
