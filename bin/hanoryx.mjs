#!/usr/bin/env node
/* hanoryx — look things up in the library from a terminal (or an LLM's shell).

     hanoryx help
     hanoryx areas                       the twelve areas and how many entries each has
     hanoryx list <area> [family]        names and one-line summaries
     hanoryx search <words…>             find by name, label or summary
     hanoryx component <Name|id> [--dense|--json]
                                         import line, props, measured size, keys, notes, example
     hanoryx family <slug>               a specimen family: every specimen, its mode and size
     hanoryx sizing <Name|id>            only the measured sizes
     hanoryx docs [topic]                the guides (sizing, principles, tokens, layout-recipes, …)

   `--dense` prints the least text that is still enough to write correct code.
   Data comes from docs/generated/manifest.json (npm run docs:generate rebuilds it). */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const argv = process.argv.slice(2);
const flags = new Set(argv.filter((a) => a.startsWith('--')));
const pos = argv.filter((a) => !a.startsWith('--'));
const [cmd = 'help', ...rest] = pos;
const dense = flags.has('--dense');

function manifest() {
  const file = path.join(ROOT, 'docs/generated/manifest.json');
  if (!fs.existsSync(file)) { console.error('No manifest yet. Run: npm run docs:generate'); process.exit(1); }
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

const clip = (s, n = 110) => (s && s.length > n ? s.slice(0, n - 1).replace(/\s+\S*$/, '') + '…' : s || '');
const one = (e) => `${e.label ? `${e.name}  (${e.label})` : e.name}${e.family ? `  [${e.family}]` : ''}${e.mode ? `  ${e.mode}` : ''}`;

function find(m, q) {
  const lower = q.toLowerCase();
  const exactId = m.entries.find((e) => e.id.toLowerCase() === lower);
  if (exactId) return [exactId];
  const byName = m.entries.filter((e) => e.name.toLowerCase() === lower || (e.label || '').toLowerCase() === lower);
  if (byName.length) return byName;
  return m.entries.filter((e) => e.id.toLowerCase().endsWith(`/${lower}`));
}

function sizingLines(e) {
  const s = e.sizing?.measured ?? e.sizing;
  if (!s) return [];
  const out = [];
  if (s.behavior) out.push(`behavior: ${s.behavior}${{ fill: ' — takes its parent\'s width', capped: ' — follows the parent up to a maximum', intrinsic: ' — sizes to content, ignores the parent', fluid: ' — width varies with the parent' }[s.behavior] ? { fill: ' — takes its parent\'s width', capped: ' — follows the parent up to a maximum', intrinsic: ' — sizes to content, ignores the parent', fluid: ' — width varies with the parent' }[s.behavior] : ''}`);
  if (s.at) out.push('size by parent width: ' + Object.entries(s.at).map(([p, v]) => `${p}→${v.w}×${v.h}`).join('  '));
  if (s.at) { const last = Object.values(s.at).pop(); if (last?.h) out.push(`ratio at widest: ${(last.w / last.h).toFixed(2)}`); }
  for (const [k, label] of [['padding', 'root padding'], ['gap', 'gap'], ['radius', 'radius'], ['fontSize', 'type'], ['minTouch', 'smallest control']]) if (s[k]) out.push(`${label}: ${s[k]}`);
  if (s.overflowsAt360) out.push('WARNING: overflows a 360px parent sideways');
  if (e.sizing?.rules) e.sizing.rules.forEach((r) => out.push(`rule: ${r}`));
  return out;
}

function printComponent(e) {
  if (flags.has('--json')) { console.log(JSON.stringify(e, null, 2)); return; }
  console.log(`# ${e.label ?? e.name}  —  ${e.area}${e.family ? `/${e.family}` : ''}  (${e.kind}${e.mode ? `, ${e.mode}` : ''})`);
  console.log(e.import);
  if (e.parent) console.log(`part of ${e.parent}`);
  if (e.usedAs) console.log('used as: ' + e.usedAs.map((u) => `${u.via} kind "${u.kind}"`).join('; '));
  if (e.summary) console.log('\n' + (dense ? clip(e.summary, 240) : e.summary));
  const sz = sizingLines(e);
  if (sz.length) console.log('\nSIZE\n  ' + sz.join('\n  '));
  if (e.props?.length) {
    console.log('\nPROPS');
    for (const p of e.props) console.log(`  ${p.name}${p.required ? '*' : ''}${p.default ? ` = ${p.default}` : ''}${p.type ? `  <${p.type}>` : ''}${p.description && !dense ? `  — ${p.description}` : ''}`);
  }
  if (e.params?.length) console.log(`\nCALL\n  ${e.name}(${e.params.join(', ')})`);
  if (e.keyboard?.length && !dense) { console.log('\nKEYS'); e.keyboard.forEach((k) => console.log(`  ${k.key} — ${k.does}`)); }
  if (e.usage?.bestPractices?.length) { console.log('\nRULES'); e.usage.bestPractices.forEach((b) => console.log(`  ${b.do ? 'DO   ' : 'DON\'T'} ${b.text}`)); }
  if (e.notes?.length && !dense) { console.log('\nNOTES'); e.notes.forEach((n) => console.log(`  - ${n}`)); }
  if (e.examples?.length) { console.log('\nEXAMPLE'); console.log(e.examples[0].code.split('\n').map((l) => '  ' + l).join('\n')); }
  if (e.related?.length) console.log('\nSEE ALSO ' + e.related.join(', '));
  console.log(`\nsource: ${e.source}${e.styles ? `  styles: ${e.styles}` : ''}`);
}

switch (cmd) {
  case 'areas': {
    const m = manifest();
    for (const a of m.areas) console.log(`${a.id.padEnd(11)} ${String(m.counts[a.id]).padStart(5)}  hanoryx-components/${a.pkg}\n${' '.repeat(18)}${a.blurb}`);
    break;
  }
  case 'list': {
    const m = manifest();
    const [area, family] = rest;
    if (!area) { console.error('usage: hanoryx list <area> [family]'); process.exit(1); }
    const es = m.entries.filter((e) => e.area === area && !e.parent && (!family || e.family === family));
    if (!es.length) { console.error(`nothing in ${area}${family ? `/${family}` : ''}. Areas: ${m.areas.map((a) => a.id).join(', ')}`); process.exit(1); }
    if (area === 'specimens' && !family) { for (const f of m.families) console.log(`${f.slug.padEnd(12)} ${String(f.count).padStart(3)}  ${f.title} — ${f.line}`); break; }
    for (const e of es) console.log(`${one(e).padEnd(44)} ${dense ? '' : clip(e.summary, 90)}`);
    break;
  }
  case 'search': {
    const q = rest.join(' ').toLowerCase().split(/\s+/).filter(Boolean);
    if (!q.length) { console.error('usage: hanoryx search <words>'); process.exit(1); }
    const m = manifest();
    const scored = [];
    for (const e of m.entries) {
      const name = `${e.name} ${e.label ?? ''}`.toLowerCase();
      const text = `${e.summary ?? ''} ${e.family ?? ''} ${e.area} ${e.kind} ${(e.keywords ?? []).join(' ')}`.toLowerCase();
      let s = 0;
      for (const t of q) { if (name === t) s += 100; else if (name.startsWith(t)) s += 40; else if (name.includes(t)) s += 25; else if (text.includes(t)) s += 6; else { s = 0; break; } }
      if (s) scored.push([s, e]);
    }
    scored.sort((a, b) => b[0] - a[0]);
    for (const [, e] of scored.slice(0, 30)) console.log(`${e.id.padEnd(46)} ${clip(e.summary, 70)}`);
    if (!scored.length) console.log('no matches');
    break;
  }
  case 'component': case 'c': {
    const m = manifest();
    const hits = find(m, rest.join(' '));
    if (!hits.length) { console.error(`no entry called "${rest.join(' ')}". Try: hanoryx search ${rest.join(' ')}`); process.exit(1); }
    hits.slice(0, 3).forEach((e, i) => { if (i) console.log('\n' + '─'.repeat(60) + '\n'); printComponent(e); });
    if (hits.length > 3) console.log(`\n(${hits.length - 3} more with that name — use the full id)`);
    break;
  }
  case 'sizing': {
    const m = manifest();
    const hits = find(m, rest.join(' '));
    if (!hits.length) { console.error('no such entry'); process.exit(1); }
    for (const e of hits) { console.log(`# ${e.id}`); console.log(sizingLines(e).join('\n') || '(not measured: run npm run docs:sizing)'); }
    break;
  }
  case 'family': {
    const m = manifest();
    const f = m.families.find((x) => x.slug === rest[0]);
    if (!f) { console.error(`families: ${m.families.map((x) => x.slug).join(', ')}`); process.exit(1); }
    console.log(`# ${f.title} — ${f.line}\n${f.blurb}\nchapter ${f.chapterTitle} · stage ${f.stage} · frame ${f.frame} · import hanoryx-components/specimens/${f.slug}\n`);
    for (const e of m.entries.filter((x) => x.area === 'specimens' && x.family === f.slug)) {
      const at = e.sizing?.measured?.at;
      const last = at ? Object.values(at).pop() : null;
      console.log(`${e.name.padEnd(26)} ${(e.mode || '').padEnd(6)} ${last ? `${last.w}×${last.h}`.padEnd(12) : ''.padEnd(12)} ${e.sizing?.measured?.behavior ?? ''}  "${e.label}"`);
    }
    break;
  }
  case 'docs': {
    const topic = rest[0];
    const dir = path.join(ROOT, 'docs');
    const topics = fs.readdirSync(dir).filter((f) => f.endsWith('.md')).map((f) => f.replace(/\.md$/, ''));
    if (!topic) { console.log('topics: ' + topics.join(', ')); break; }
    if (!topics.includes(topic)) { console.error(`no guide "${topic}". topics: ${topics.join(', ')}`); process.exit(1); }
    process.stdout.write(fs.readFileSync(path.join(dir, `${topic}.md`), 'utf8'));
    break;
  }
  default:
    console.log(fs.readFileSync(fileURLToPath(import.meta.url), 'utf8').match(/\/\*([\s\S]*?)\*\//)[1].replace(/^ {0,3}/gm, ''));
}
