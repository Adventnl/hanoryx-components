#!/usr/bin/env node
/* Verify the actual advertised import and its source, not just that a file exists. */
import fs from 'node:fs';
import path from 'node:path';
import { parse } from '@babel/parser';

const ROOT = process.cwd();
const manifest = JSON.parse(fs.readFileSync('docs/generated/manifest.json', 'utf8'));
const cache = new Map();
function resolve(file, specifier) {
  const base = path.resolve(path.dirname(file), specifier);
  const target = [base, `${base}.js`, `${base}.jsx`, path.join(base, 'index.js')].find(candidate => fs.existsSync(candidate) && fs.statSync(candidate).isFile());
  if (!target) throw new Error(`Unresolved ${specifier} from ${file}`);
  return target;
}
function exportsOf(file) {
  if (cache.has(file)) return cache.get(file);
  const result = new Map(); cache.set(file, result);
  const ast = parse(fs.readFileSync(file, 'utf8'), { sourceType: 'module', plugins: ['jsx'] });
  const imported = new Map();
  for (const node of ast.program.body) if (node.type === 'ImportDeclaration' && node.source.value.startsWith('.')) {
    const target = resolve(file, node.source.value);
    for (const specifier of node.specifiers) imported.set(specifier.local.name, { target, name: specifier.type === 'ImportDefaultSpecifier' ? 'default' : specifier.imported?.name });
  }
  for (const node of ast.program.body) {
    if (node.type === 'ExportDefaultDeclaration') result.set('default', file);
    if (node.type === 'ExportAllDeclaration') for (const [name, source] of exportsOf(resolve(file, node.source.value))) if (name !== 'default') result.set(name, source);
    if (node.type !== 'ExportNamedDeclaration') continue;
    if (node.source) {
      const target = resolve(file, node.source.value);
      const nested = exportsOf(target);
      for (const specifier of node.specifiers) {
        const source = specifier.type === 'ExportNamespaceSpecifier' ? target : nested.get(specifier.local.name);
        if (!source) throw new Error(`Missing re-export ${specifier.local?.name} in ${file}`);
        result.set(specifier.exported.name, source);
      }
    } else {
      for (const specifier of node.specifiers) {
        const binding = imported.get(specifier.local.name);
        result.set(specifier.exported.name, binding ? exportsOf(binding.target).get(binding.name) ?? binding.target : file);
      }
      const declaration = node.declaration;
      if (declaration?.id) result.set(declaration.id.name, file);
      for (const item of declaration?.declarations ?? []) if (item.id.name) result.set(item.id.name, file);
    }
  }
  return result;
}
const ids = new Set(); const failures = [];
for (const entry of manifest.entries) {
  if (ids.has(entry.id)) failures.push(`Duplicate id: ${entry.id}`);
  ids.add(entry.id);
  if (!fs.existsSync(entry.source)) failures.push(`Missing source: ${entry.id}`);
  if (['profile', 'scene'].includes(entry.kind)) continue;
  const match = /import \{ (\w+) \} from 'hanoryx-components\/([^']+)'/.exec(entry.import);
  if (!match) { failures.push(`Invalid import: ${entry.id}`); continue; }
  const source = exportsOf(path.resolve(ROOT, 'src', match[2], 'index.js')).get(match[1]);
  if (source !== path.resolve(ROOT, entry.source)) failures.push(`${entry.id}: advertised ${match[1]} comes from ${source ?? 'no export'}, expected ${entry.source}`);
}
if (failures.length) { console.error(failures.slice(0, 30).join('\n')); process.exitCode = 1; }
else console.log(`Catalog ids, sources and advertised imports resolve (${manifest.entries.length} entries).`);
