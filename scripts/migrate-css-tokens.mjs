#!/usr/bin/env node
/* Preserve extracted CSS values while centralising their literal definitions.
   Run after adding legacy CSS; new components should use semantic tokens directly.
   Media queries and @property initial values remain literals: CSS variables are
   not valid substitutes in those grammar positions. */
import fs from 'node:fs';
import path from 'node:path';
import postcss from 'postcss';
import { walk } from './lib/exports.mjs';

const root = process.cwd();
const registry = path.join(root, 'src/styles/extracted-tokens.css');
const base = path.join(root, 'src/styles/tokens.css');
const normalize = (value) => value.toLowerCase().replace(/\s+/g, '');
const names = new Map();
const additions = new Map();
const normalizeHex = (value) => {
  const hex = value.toLowerCase();
  return /^#[\da-f]{3,4}$/.test(hex) ? '#' + hex.slice(1).split('').map((c) => c + c).join('') : hex;
};
for (const file of [base, registry]) if (fs.existsSync(file)) {
  postcss.parse(fs.readFileSync(file, 'utf8')).walkDecls((decl) => {
    if (!decl.prop.startsWith('--') || /var\(/.test(decl.value)) return;
    const canonical = decl.value.startsWith('#') ? normalizeHex(decl.value) : normalize(decl.value);
    const category = file === registry ? decl.prop.startsWith('--c-') ? 'c-extracted' : decl.prop.startsWith('--dur-') ? 'dur-extracted' : 'size' : decl.prop.startsWith('--c-') ? 'c-extracted' : decl.prop.startsWith('--dur-') ? 'dur-extracted' : decl.prop.startsWith('--space-') ? 'space' : decl.prop.startsWith('--fs-') ? 'font' : decl.prop.startsWith('--r-') ? 'radius' : null;
    if (category && !names.has(`${category}|${canonical}`)) names.set(`${category}|${canonical}`, decl.prop);
    if (file === registry) additions.set(decl.prop, decl.value);
  });
}
function token(value, category) {
  const canonical = value.startsWith('#') ? normalizeHex(value) : normalize(value);
  let name = names.get(`${category}|${canonical}`) ?? (['space', 'font', 'radius'].includes(category) ? names.get(`size|${canonical}`) : null);
  if (!name) {
    const suffix = canonical.replace(/^#/, '').replace(/^-/, 'negative-').replaceAll('.', 'p').replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').replace(/-$/, '');
    name = `--${['space', 'font', 'radius'].includes(category) ? 'size' : category}-${suffix}`;
    names.set(`${category}|${canonical}`, name);
    additions.set(name, value);
  }
  return `var(${name})`;
}
let changed = 0;
for (const file of walk(path.join(root, 'src'), (file) => file.endsWith('.css') && file !== base && file !== registry)) {
  const current = fs.readFileSync(file, 'utf8');
  let input = current;
  const ast = postcss.parse(input, { from: file });
  ast.walkDecls((decl) => {
    if (decl.parent.type === 'atrule' && decl.parent.name === 'property') return;
    // Protect strings and urls. Their contents are not CSS numeric values.
    const protectedValues = [];
    let value = decl.value.replace(/url\([^)]*\)|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/g, (part) => `\uE000${protectedValues.push(part) - 1}\uE001`);
    value = value.replace(/#[\da-fA-F]{3,8}\b/g, (part) => token(part, 'c-extracted'));
    value = value.replace(/\b(?:rgba?|hsla?)\(\s*[\d.%,\s/+-]+\)/gi, (part) => token(part, 'c-extracted'));
    const dimension = /^(font|font-size)$/.test(decl.prop) ? 'font' : /radius/.test(decl.prop) ? 'radius' : /padding|margin|gap/.test(decl.prop) ? 'space' : 'size';
    value = value.replace(/(?<![\w-])(-?(?:\d*\.\d+|\d+)(?:rem|px|em|ch|ex|svh|dvh|vh|vw|vmin|vmax))\b/g, (part) => token(part, dimension));
    value = value.replace(/(?<![\w-])(-?(?:\d*\.\d+|\d+)(?:ms|s))\b/g, (part) => token(part, 'dur-extracted'));
    value = value.replace(/\uE000(\d+)\uE001/g, (_, i) => protectedValues[Number(i)]);
    decl.value = value;
  });
  const output = ast.toString();
  if (output !== current) { fs.writeFileSync(file, output); changed += 1; }
}
fs.writeFileSync(registry, '/* Exact legacy values retained for source parity. Prefer the semantic tokens in tokens.css for new UI. */\n:root {\n' + [...additions].sort(([a], [b]) => a.localeCompare(b)).map(([name, value]) => `  ${name}: ${value};`).join('\n') + '\n}\n');
console.log(`Moved CSS literals into tokens: ${changed} stylesheets; ${additions.size} preserved values.`);
