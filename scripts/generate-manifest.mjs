#!/usr/bin/env node
/* Builds the machine-readable catalogue of the library.

     node scripts/generate-manifest.mjs

   Reads, in this order of authority:
     1. the hand-written docs beside each component (Name.doc.mjs)
     2. facts extracted from the source (exports, props, defaults, comments)
     3. measured sizes (docs/generated/sizing.json, from `npm run docs:sizing`)
   and writes
     docs/generated/manifest.json   every entry, full detail (the site and the CLI read this)
     llms.txt                        the short map an LLM should read first
     llms-full.txt                   every entry with its props, one after another
     docs/COMPONENTS.md              the same catalogue for people
*/
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { analyzeModule, summarize } from './lib/analyze.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(ROOT, 'src');
const rel = (p) => path.relative(ROOT, p).replace(/\\/g, '/');
const readJson = (p, fallback) => (fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : fallback);
const list = (dir, re) => (fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => re.test(f)).sort() : []);

const sizing = readJson(path.join(ROOT, 'docs/generated/sizing.json'), {});

/* ---------- areas ---------- */
export const AREAS = [
  { id: 'kit', title: 'Interface kit', blurb: 'Sixty-one accessible components in six families: inputs, navigation, feedback, data display, overlays, content and layout.', pkg: 'kit' },
  { id: 'fx', title: 'Foreground toolkit', blurb: 'The motion-rich pieces signatures are built from: tilt, spotlight, odometer, marquee, drawn glyphs.', pkg: 'fx' },
  { id: 'ui', title: 'Site UI', blurb: "The site's own button, pill, section header and data panel.", pkg: 'ui' },
  { id: 'page', title: 'Page', blurb: 'The data-driven page: hero, twenty block types and the template that renders them.', pkg: 'page' },
  { id: 'shell', title: 'Shell', blurb: 'The frame around every page: navbar, footer, search, shortcuts, cursor, route transitions, effects.', pkg: 'shell' },
  { id: 'reveal', title: 'Reveal & kinetic type', blurb: 'Entrance animation: 33 reveal profiles and the kinetic text engine.', pkg: 'reveal' },
  { id: 'scenes', title: 'Scenes', blurb: 'The Canvas scene host and the library of 67 background scenes.', pkg: 'scenes' },
  { id: 'signatures', title: 'Signatures', blurb: 'Page-specific interactive compositions: explorers, builders, matrices, maps, tools.', pkg: 'signatures' },
  { id: 'closers', title: 'Closers', blurb: 'Page endings: 84 different small objects that play a page out.', pkg: 'closers' },
  { id: 'specimens', title: 'Specimens', blurb: '2,091 stand-alone interface components in 50 families across ten chapters.', pkg: 'specimens' },
  { id: 'stage', title: 'Stage', blurb: 'The scroll-driven stages that present specimens, and the parts they share.', pkg: 'stage' },
  { id: 'core', title: 'Core', blurb: 'Hooks, providers, the motion engine, utilities and site sources.', pkg: 'core' },
];

const KIT_FAMILIES = {
  inputs: 'Inputs', navigation: 'Navigation', feedback: 'Feedback', data: 'Data display', overlays: 'Overlays', content: 'Content & layout',
};

/* ---------- helpers ---------- */
async function loadDoc(file) {
  const docFile = file.replace(/\.(jsx?|mjs)$/, '.doc.mjs');
  if (!fs.existsSync(docFile)) return null;
  const mod = await import(pathToFileURL(docFile).href + `?t=${Date.now()}`);
  return mod.docs ?? mod.default ?? null;
}

function mergeProps(extracted, authored = []) {
  const byName = new Map(authored.map((p) => [p.name, p]));
  const out = [];
  const used = new Set();
  for (const p of extracted) {
    if (p.object) continue;
    const a = byName.get(p.name) ?? byName.get(p.name.replace(/^\.\.\./, ''));
    used.add(a?.name);
    out.push({
      name: p.name.startsWith('...') ? p.name : p.name,
      type: a?.type ?? undefined,
      default: a?.default ?? p.default ?? undefined,
      required: a?.required ?? undefined,
      description: a?.description ?? (p.rest ? 'Everything else is passed to the root element.' : undefined),
    });
  }
  for (const a of authored) if (!used.has(a.name) && !out.find((o) => o.name === a.name)) out.push(a);
  return out.map((p) => Object.fromEntries(Object.entries(p).filter(([, v]) => v !== undefined)));
}

function importLine(name, pkg, isDefault) {
  return `import { ${name} } from 'hanoryx-components/${pkg}';`;
}

const entries = [];
const warnings = [];

async function addModule({ area, family, file, pkg, kind }) {
  const info = analyzeModule(file);
  const doc = await loadDoc(file);
  const base = path.basename(file).replace(/\.(jsx?|mjs)$/, '');
  const comps = info.exports.filter((e) => (kind === 'core' ? ['component', 'hook', 'function', 'class'].includes(e.kind) && /^[A-Za-z]/.test(e.name) : e.kind === 'component'));
  const primary = comps.find((c) => c.name === base) ?? comps.find((c) => c.isDefault) ?? comps[0];
  if (!comps.length && kind !== 'core') {
    // a data/registry module (e.g. registry.js): one entry for the module itself
    return;
  }
  for (const c of comps) {
    const isPrimary = c === primary;
    const authored = isPrimary ? doc : (doc?.subcomponents?.[c.name] ?? null);
    const text = c.doc ?? (isPrimary ? info.header : null);
    const e = {
      id: `${area}/${family ? family + '/' : ''}${c.name}`,
      name: c.name,
      area,
      family: family || undefined,
      kind: c.kind === 'hook' ? 'hook' : c.kind === 'component' ? 'component' : 'function',
      parent: isPrimary ? undefined : primary?.name,
      import: importLine(c.name, pkg),
      source: rel(file),
      styles: fs.existsSync(file.replace(/\.(jsx?|mjs)$/, '.module.css')) ? rel(file.replace(/\.(jsx?|mjs)$/, '.module.css')) : undefined,
      summary: authored?.summary ?? summarize(text),
      description: authored?.description ?? (text && text.length > 260 ? text : undefined),
      keywords: authored?.keywords,
      props: c.kind === 'component' ? mergeProps(c.props, authored?.props) : undefined,
      params: c.params,
      keyboard: authored?.keyboard,
      usage: authored?.usage,
      sizing: authored?.sizing,
      notes: authored?.notes,
      examples: authored?.examples,
      related: authored?.related,
      documented: Boolean(authored),
    };
    entries.push(prune(e));
  }
}

function prune(o) {
  return Object.fromEntries(Object.entries(o).filter(([, v]) => v !== undefined && !(Array.isArray(v) && v.length === 0)));
}

/* ---------- kit ---------- */
for (const fam of Object.keys(KIT_FAMILIES)) {
  const dir = path.join(SRC, 'kit', fam);
  for (const f of list(dir, /\.jsx$/)) await addModule({ area: 'kit', family: fam, file: path.join(dir, f), pkg: 'kit' });
}

/* ---------- flat areas ---------- */
for (const [area, pkg] of [['fx', 'fx'], ['ui', 'ui'], ['signatures', 'signatures'], ['closers', 'closers']]) {
  const dir = path.join(SRC, area);
  for (const f of list(dir, /\.jsx$/)) await addModule({ area, file: path.join(dir, f), pkg });
}

/* ---------- page ---------- */
for (const f of list(path.join(SRC, 'page'), /\.jsx$/)) await addModule({ area: 'page', family: 'template', file: path.join(SRC, 'page', f), pkg: 'page' });
for (const f of list(path.join(SRC, 'page/blocks'), /\.jsx$/)) await addModule({ area: 'page', family: 'blocks', file: path.join(SRC, 'page/blocks', f), pkg: 'page' });

/* ---------- shell ---------- */
for (const fam of fs.readdirSync(path.join(SRC, 'shell')).filter((d) => fs.statSync(path.join(SRC, 'shell', d)).isDirectory()).sort()) {
  for (const f of list(path.join(SRC, 'shell', fam), /\.jsx$/)) await addModule({ area: 'shell', family: fam, file: path.join(SRC, 'shell', fam, f), pkg: 'shell' });
}

/* ---------- reveal & scenes ---------- */
for (const f of ['Reveal.jsx', 'KineticText.jsx']) await addModule({ area: 'reveal', file: path.join(SRC, 'reveal', f), pkg: 'reveal' });
for (const f of ['SceneCanvas.jsx', 'SectionScene.jsx']) await addModule({ area: 'scenes', family: 'host', file: path.join(SRC, 'scenes', f), pkg: 'scenes' });

/* ---------- stage ---------- */
for (const f of list(path.join(SRC, 'stage'), /\.jsx$/)) await addModule({ area: 'stage', family: 'parts', file: path.join(SRC, 'stage', f), pkg: 'stage' });
for (const f of list(path.join(SRC, 'stage/stages'), /\.jsx$/)) await addModule({ area: 'stage', family: 'stages', file: path.join(SRC, 'stage/stages', f), pkg: 'stage' });

/* ---------- core ---------- */
for (const fam of ['hooks', 'providers', 'motion', 'performance', 'utils', 'site']) {
  for (const f of list(path.join(SRC, 'core', fam), /\.(jsx?|js)$/).filter((x) => x !== 'index.js')) {
    await addModule({ area: 'core', family: fam, file: path.join(SRC, 'core', fam, f), pkg: 'core', kind: 'core' });
  }
}

/* ---------- reveal profiles & scenes (data entries) ---------- */
{
  const code = fs.readFileSync(path.join(SRC, 'reveal/revealProfiles.js'), 'utf8');
  const names = [...code.matchAll(/^\s{2}([a-zA-Z0-9]+):\s*\{/gm)].map((m) => m[1]);
  for (const nm of names) entries.push({ id: `reveal/profiles/${nm}`, name: nm, area: 'reveal', family: 'profiles', kind: 'profile', import: `<Reveal profile="${nm}">…</Reveal>`, source: 'src/reveal/revealProfiles.js', summary: `Entrance profile "${nm}" for <Reveal profile="${nm}">.`, documented: false });
}
{
  const scenes = [];
  const walkDir = (d) => fs.readdirSync(d, { withFileTypes: true }).forEach((e) => {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walkDir(p);
    else if (e.name.endsWith('.js')) {
      const code = fs.readFileSync(p, 'utf8');
      for (const m of code.matchAll(/registerScene\(\s*'([a-z0-9-]+)'/g)) scenes.push({ name: m[1], file: p });
    }
  });
  walkDir(path.join(SRC, 'scenes/library'));
  for (const s of scenes) {
    const code = fs.readFileSync(s.file, 'utf8');
    const lead = code.match(/\/\*([\s\S]*?)\*\//)?.[1]?.replace(/^\s*\*\s?/gm, '').trim();
    entries.push({ id: `scenes/library/${s.name}`, name: s.name, area: 'scenes', family: path.basename(path.dirname(s.file)) === 'library' ? 'base' : path.basename(path.dirname(s.file)), kind: 'scene', import: `<SceneCanvas scene="${s.name}" />`, source: rel(s.file), summary: summarize(lead) || `Canvas scene "${s.name}".`, documented: false });
  }
}

/* ---------- registries: which block kind renders which composition ---------- */
{
  const parseRegistry = (file) => {
    const code = fs.readFileSync(file, 'utf8');
    const out = [];
    let group = null;
    for (const line of code.split('\n')) {
      const g = /export const (\w+) = \{/.exec(line);
      if (g) group = g[1];
      const m = /^\s+(\w+): lazy\(\(\) => import\('\.\/(\w+)'\)\)/.exec(line);
      if (m) out.push({ kind: m[1], file: m[2], group });
    }
    return out;
  };
  const sig = parseRegistry(path.join(SRC, 'signatures/registry.js'));
  const clo = parseRegistry(path.join(SRC, 'closers/registry.js'));
  for (const e of entries) {
    if (e.area === 'signatures') {
      const hits = sig.filter((r) => r.file === e.name);
      if (hits.length) e.usedAs = hits.map((r) => ({ via: r.group === 'asideRegistry' ? 'hero.aside' : 'signature block', kind: r.kind }));
    } else if (e.area === 'closers') {
      const hits = clo.filter((r) => r.file === e.name);
      if (hits.length) e.usedAs = hits.map((r) => ({ via: 'closer block', kind: r.kind }));
    }
  }
}

/* ---------- specimens ---------- */
const familyMod = await import(pathToFileURL(path.join(SRC, 'specimens/families.js')).href);
const specimenFamilies = [];
for (const fam of familyMod.showcasePages) {
  const dir = path.join(SRC, 'specimens', fam.slug);
  const idx = fs.readFileSync(path.join(dir, 'index.js'), 'utf8');
  const items = [...idx.matchAll(/^\s+\[("(?:[^"\\]|\\.)*"), (\w+), ("[^"]*")\],?$/gm)].map((m) => ({ label: JSON.parse(m[1]), component: m[2], mode: JSON.parse(m[3]) }));
  const doc = await loadDoc(path.join(dir, `${fam.slug}.jsx`));
  const chapter = familyMod.chapters.find((c) => c.id === fam.chapter);
  const header = idx.match(/^\/\*([\s\S]*?)\*\//)?.[1]?.replace(/^\s*[=\-]{3,}\s*$/gm, '').replace(/^\s*/gm, '').trim();
  const fm = {
    slug: fam.slug, title: fam.title, chapter: fam.chapter, chapterTitle: chapter?.title, number: familyMod.showcaseNumber(fam.slug),
    line: fam.line, blurb: fam.blurb, stage: fam.engine, frame: fam.frame, scene: fam.scene, ground: fam.ground,
    description: doc?.description ?? header, count: items.length,
  };
  specimenFamilies.push(fm);
  const pkg = `specimens/${fam.slug}`;
  for (const it of items) {
    const sz = sizing[`specimens/${fam.slug}/${it.component}`];
    entries.push(prune({
      id: `specimens/${fam.slug}/${it.component}`, name: it.component, label: it.label, area: 'specimens', family: fam.slug, kind: 'specimen', mode: it.mode,
      import: `import { ${it.component} } from 'hanoryx-components/${pkg}';`, source: `src/specimens/${fam.slug}/${it.component}.jsx`, styles: `src/specimens/${fam.slug}/${fam.slug}.module.css`,
      summary: `${it.label} — ${chapter?.title?.toLowerCase()} specimen in ${fam.title} (${it.mode}).`, sizing: sz,
    }));
  }
}

/* ---------- sizing for everything else ---------- */
for (const e of entries) if (!e.sizing && sizing[e.id]) e.sizing = sizing[e.id];
for (const e of entries) if (e.sizing && sizing[e.id] && e.area !== 'specimens') e.sizing = { ...e.sizing, measured: sizing[e.id].measured ?? sizing[e.id] };

/* ---------- write ---------- */
const byArea = Object.fromEntries(AREAS.map((a) => [a.id, entries.filter((e) => e.area === a.id)]));
const manifest = {
  name: 'hanoryx-components',
  generatedBy: 'scripts/generate-manifest.mjs',
  counts: Object.fromEntries(AREAS.map((a) => [a.id, byArea[a.id].length])),
  areas: AREAS,
  kitFamilies: KIT_FAMILIES,
  chapters: familyMod.chapters,
  stages: familyMod.engines,
  families: specimenFamilies,
  entries,
};
fs.mkdirSync(path.join(ROOT, 'docs/generated'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'docs/generated/manifest.json'), JSON.stringify(manifest));

/* llms.txt — the short map */
const lines = [];
lines.push('# hanoryx-components', '', '> The Hanoryx interface library: every component, animation, scene and specimen from the Hanoryx Systems website, organised for people and LLMs to build with. Black surfaces, white type, one red accent, mono labels.', '');
lines.push('Read first: AGENTS.md (rules), docs/sizing.md (sizes, ratios, padding), docs/layout-recipes.md (page skeletons). Then look components up with `npm run hx -- component <Name>` or in docs/generated/manifest.json.', '');
for (const a of AREAS) {
  const es = byArea[a.id];
  lines.push(`## ${a.title} — import from 'hanoryx-components/${a.pkg}' (${es.length})`, '', a.blurb, '');
  if (a.id === 'specimens') {
    for (const f of specimenFamilies) lines.push(`- ${f.title} (${f.count}) — ${f.line} \`hanoryx-components/specimens/${f.slug}\``);
  } else if (['signatures', 'closers', 'core'].includes(a.id) || a.id === 'scenes') {
    lines.push(es.map((e) => e.name).join(', '));
  } else {
    for (const e of es.filter((x) => !x.parent)) lines.push(`- ${e.name}${e.family ? ` [${e.family}]` : ''} — ${e.summary}`);
  }
  lines.push('');
}
fs.writeFileSync(path.join(ROOT, 'llms.txt'), lines.join('\n'));

/* llms-full.txt and COMPONENTS.md */
const full = ['# hanoryx-components — full catalogue', ''];
const md = ['# Component catalogue', '', `Generated by \`scripts/generate-manifest.mjs\` — ${entries.length} entries.`, ''];
for (const a of AREAS) {
  const es = byArea[a.id];
  full.push(`## ${a.title}`, '');
  md.push(`## ${a.title} (${es.length})`, '', a.blurb, '');
  if (a.id === 'specimens') {
    for (const f of specimenFamilies) {
      const items = es.filter((e) => e.family === f.slug);
      full.push(`### ${f.title} — ${f.line} (${f.count})`, `Chapter ${f.chapterTitle}; stage ${f.stage}. ${f.blurb}`, items.map((i) => `${i.name} (${i.mode})`).join(', '), '');
      md.push(`### ${f.title}`, '', `${f.line} ${f.blurb} — \`hanoryx-components/specimens/${f.slug}\``, '', items.map((i) => `\`${i.name}\``).join(' · '), '');
    }
    continue;
  }
  for (const e of es) {
    full.push(`### ${e.name}${e.family ? ` (${e.area}/${e.family})` : ''}`, e.import, e.summary ?? '');
    if (e.props?.length) full.push('props: ' + e.props.map((p) => `${p.name}${p.default ? `=${p.default}` : ''}`).join(', '));
    full.push('');
  }
  md.push('| Name | Family | Summary |', '| --- | --- | --- |');
  for (const e of es.filter((x) => !x.parent)) md.push(`| \`${e.name}\` | ${e.family ?? ''} | ${(e.summary ?? '').replace(/\|/g, '\\|')} |`);
  md.push('');
}
fs.writeFileSync(path.join(ROOT, 'llms-full.txt'), full.join('\n'));
fs.writeFileSync(path.join(ROOT, 'docs/COMPONENTS.md'), md.join('\n'));

const undocumented = entries.filter((e) => !e.documented && ['kit', 'fx', 'ui', 'page', 'shell'].includes(e.area));
console.log(`manifest: ${entries.length} entries — ` + AREAS.map((a) => `${a.id} ${byArea[a.id].length}`).join(', '));
if (undocumented.length) console.log(`${undocumented.length} core entries have no .doc.mjs yet`);
warnings.forEach((w) => console.warn('WARN', w));
