#!/usr/bin/env node
/* One command to know the library is sound:
     1. every relative import in src/ resolves (and none uses a path alias)
     2. every barrel is current
     3. the manifest builds and every entry points at a file that exists
     4. ESLint is clean
   Exit code 1 on the first failure. */
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { parse } from '@babel/parser';
import { walk } from './lib/exports.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, 'src');
let failed = false;
const step = (name, ok, detail = '') => { console.log(`${ok ? '✓' : '✗'} ${name}${detail ? ` — ${detail}` : ''}`); if (!ok) failed = true; };

/* 1. imports */
{
  const EXTS = ['', '.js', '.jsx', '.json', '/index.js', '/index.jsx'];
  const bad = [];
  let n = 0;
  for (const f of walk(SRC, (p) => /\.(jsx?|mjs)$/.test(p))) {
    const ast = parse(fs.readFileSync(f, 'utf8'), { sourceType: 'module', plugins: ['jsx'] });
    const specs = [];
    const visit = (node) => {
      if (!node || typeof node.type !== 'string') return;
      if ((node.type === 'ImportDeclaration' || node.type === 'ExportAllDeclaration' || node.type === 'ExportNamedDeclaration') && node.source) specs.push(node.source.value);
      if (node.type === 'CallExpression' && node.callee.type === 'Import' && node.arguments[0]?.type === 'StringLiteral') specs.push(node.arguments[0].value);
      for (const k of Object.keys(node)) { const v = node[k]; if (Array.isArray(v)) v.forEach(visit); else if (v && typeof v.type === 'string') visit(v); }
    };
    visit(ast.program);
    for (const s of specs) {
      if (s.startsWith('@/')) { bad.push(`${path.relative(ROOT, f)}: alias ${s}`); continue; }
      if (!s.startsWith('.')) continue;
      n += 1;
      const base = path.resolve(path.dirname(f), s.replace(/\?.*$/, ''));
      if (!EXTS.some((x) => fs.existsSync(base + x) && fs.statSync(base + x).isFile())) bad.push(`${path.relative(ROOT, f)}: ${s}`);
    }
  }
  step(`imports resolve (${n} checked)`, bad.length === 0, bad.slice(0, 5).join('; '));
}

/* 2. barrels */
{
  const r = spawnSync('node', ['scripts/generate-barrels.mjs', '--check'], { cwd: ROOT, encoding: 'utf8' });
  step('barrels are current', r.status === 0, (r.stderr || '').trim().split('\n')[0]);
}

/* 3. manifest */
{
  const r = spawnSync('node', ['scripts/generate-manifest.mjs'], { cwd: ROOT, encoding: 'utf8' });
  let ok = r.status === 0;
  let detail = (r.stderr || '').trim().split('\n')[0];
  if (ok) {
    const m = JSON.parse(fs.readFileSync(path.join(ROOT, 'docs/generated/manifest.json'), 'utf8'));
    const missing = m.entries.filter((e) => e.source && !fs.existsSync(path.join(ROOT, e.source)));
    ok = missing.length === 0;
    detail = ok ? `${m.entries.length} entries` : `no file for ${missing.slice(0, 3).map((e) => e.id).join(', ')}`;
  }
  step('manifest builds', ok, detail);
}

/* 4. lint */
{
  const r = spawnSync('npx', ['eslint', '.'], { cwd: ROOT, encoding: 'utf8' });
  step('eslint', r.status === 0, r.status === 0 ? '' : (r.stdout || r.stderr).trim().split('\n').slice(0, 6).join(' | '));
}

process.exit(failed ? 1 : 0);
