#!/usr/bin/env node
import fs from 'node:fs';
import postcss from 'postcss';
import { walk } from './lib/exports.mjs';

const failures = [];
for (const file of walk('src', (file) => file.endsWith('.css') && !/(?:^|[\\/])(?:extracted-)?tokens\.css$/.test(file))) {
  const ast = postcss.parse(fs.readFileSync(file, 'utf8'), { from: file });
  if (file.endsWith('.module.css')) ast.walkRules(rule => {
    if (rule.parent.type === 'atrule' && /keyframes$/.test(rule.parent.name)) return;
    const selectors = []; let current = ''; let depth = 0;
    for (const character of rule.selector) {
      if ('(['.includes(character)) depth += 1;
      if (')]'.includes(character)) depth -= 1;
      if (character === ',' && depth === 0) { selectors.push(current); current = ''; } else current += character;
    }
    selectors.push(current);
    if (selectors.some(selector => /^[a-z][\w-]*(?:\s*::?[\w()-]+)?$/i.test(selector.trim()))) failures.push(`${file}:${rule.source.start.line} unscoped type selector: ${rule.selector}`);
  });
  ast.walkDecls((decl) => {
    if (decl.parent.type === 'atrule' && decl.parent.name === 'property') return;
    const value = decl.value.replace(/url\([^)]*\)|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/g, '');
    if (/#[\da-fA-F]{3,8}\b|\b(?:rgba?|hsla?)\(\s*[\d.%,\s/+-]+\)|(?<![\w-])-?(?:\d*\.\d+|\d+)(?:rem|px|em|ch|ex|svh|dvh|vh|vw|vmin|vmax|ms|s)\b/.test(value)) failures.push(`${file}:${decl.source.start.line} ${decl.prop}: ${decl.value}`);
  });
}
if (failures.length) { console.error(failures.slice(0, 25).join('\n')); console.error(`${failures.length} declarations need tokens. Run node scripts/migrate-css-tokens.mjs for extracted CSS.`); process.exitCode = 1; }
else console.log('CSS uses tokens (media-query thresholds and @property initial values are syntax exceptions).');
