#!/usr/bin/env node
/* Checks the port against the source: renders every specimen family in the
   original hanoryx-web (its /showcase/<slug>?view=sheet) and here (the docs-site
   sheet), and compares the DOM of every specimen's bed.

     REF_BASE=http://127.0.0.1:5301 QA_BASE=http://127.0.0.1:5199 \
       node scripts/qa/compare-specimens.mjs [slug …] [--verbose]

   Both run with reduced motion and a seeded Math.random, so what is drawn is
   deterministic. CSS-module class names are compared without their hashes, and
   generated ids (useId) are masked: what must match is the structure, the text,
   the attributes and the inline styles of every element. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { launch, BASE } from './browser.mjs';

const REF = process.env.REF_BASE || 'http://127.0.0.1:5301';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const verbose = process.argv.includes('--verbose');
const styleMode = process.argv.includes('--styles');
const only = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'docs/generated/manifest.json'), 'utf8'));
const slugs = manifest.families.map((f) => f.slug).filter((s) => !only.length || only.includes(s));

const seed = () => {
  let s = 12345;
  Math.random = () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
};

const NORMALISE = `
(() => {
  const out = {};
  for (const fig of document.querySelectorAll('figure[data-spec]')) {
    const id = fig.id;
    const bed = fig.querySelector('.sc-bed');
    if (!bed) continue;
    const clone = bed.cloneNode(true);
    const walk = (el) => {
      if (el.nodeType !== 1) return;
      if (el.hasAttribute('class')) {
        const cls = el.getAttribute('class').split(/\\s+/).filter(Boolean).map((c) => c.replace(/^_/, '').replace(/_[A-Za-z0-9-]{5,8}(?:_\\d+)?$/, '')).sort().join(' ');
        el.setAttribute('class', cls);
      }
      for (const a of ['id', 'for', 'aria-labelledby', 'aria-describedby', 'aria-controls', 'list', 'aria-owns', 'aria-activedescendant']) {
        if (el.hasAttribute(a)) el.setAttribute(a, el.getAttribute(a).replace(/(_r_[a-z0-9]+_|«[^»]*»|:r[a-z0-9]+:|r[0-9a-z]{1,4}-?)/g, 'ID'));
      }
      el.removeAttribute('data-on');
      if (el.style?.getPropertyValue('--prog-v')) {
        const value = el.style.getPropertyValue('--prog-v');
        el.style.removeProperty('--prog-v'); el.style.setProperty('--v', value);
      }
      [...el.children].forEach(walk);
    };
    walk(clone);
    // useId() names (_r_9_) appear inside url(#…) references too: mask them everywhere
    out[id] = clone.innerHTML.replace(/_r_[a-z0-9]+_/g, '_r_ID_');
  }
  return out;
})()`;


/* Computed style of every element in every bed, positioned relative to the bed —
   what the DOM comparison cannot see (a custom property that no longer resolves,
   a rule that stopped matching). Figures are pinned to one width so both pages lay
   out the same; transitions and animations are off so nothing is mid-flight. */
const STYLES = `
(() => {
  const out = {};
  const props = ['display', 'position', 'color', 'backgroundColor', 'backgroundImage', 'borderTopColor', 'borderTopWidth', 'borderRadius', 'fontSize', 'fontWeight', 'fontFamily', 'lineHeight', 'letterSpacing', 'opacity', 'transform', 'clipPath', 'filter', 'overflow', 'zIndex', 'boxShadow', 'fill', 'stroke', 'strokeWidth', 'strokeDasharray', 'strokeDashoffset', 'strokeLinecap', 'padding', 'margin', 'gap'];
  for (const fig of document.querySelectorAll('figure[data-spec]')) {
    const bed = fig.querySelector('.sc-bed');
    if (!bed) continue;
    const o = bed.getBoundingClientRect();
    const rows = [];
    for (const el of bed.querySelectorAll('*')) {
      const r = el.getBoundingClientRect();
      const cs = getComputedStyle(el);
      const hasBox = el.getClientRects().length > 0;
      rows.push({ tag: el.tagName, x: hasBox ? +(r.left - o.left).toFixed(1) : 0, y: hasBox ? +(r.top - o.top).toFixed(1) : 0, w: +r.width.toFixed(1), h: +r.height.toFixed(1), css: props.map((p) => cs[p]).join('|') });
    }
    out[fig.id] = rows;
  }
  return out;
})()`;

const PIN = 'figure[data-spec] { width: 420px !important; max-width: 420px !important; } *, *::before, *::after { animation: none !important; transition: none !important; caret-color: transparent !important; }';

function diffStyles(a, b) {
  if (a.length !== b.length) return [`element count ${a.length} vs ${b.length}`];
  const diffs = [];
  const masked = (css) => css.replace(/url\([^)]*\)/g, 'url()');
  for (let i = 0; i < a.length; i += 1) {
    const x = a[i]; const y = b[i];
    const geo = ['x', 'y', 'w', 'h'].filter((k) => Math.abs(x[k] - y[k]) > 0.6);
    if (geo.length) diffs.push(`${x.tag}[${i}] ${geo.map((k) => `${k} ${x[k]}→${y[k]}`).join(', ')}`);
    else if (masked(x.css) !== masked(y.css)) {
      const px = masked(x.css).split('|'); const py = masked(y.css).split('|');
      diffs.push(`${x.tag}[${i}] style ${px.map((v, k) => (v !== py[k] ? `#${k}: ${v.slice(0, 50)}→${(py[k] ?? '').slice(0, 50)}` : null)).filter(Boolean).join('; ')}`);
    }
  }
  return diffs;
}

async function grab(page, url, ready) {
  await page.goto(url, { waitUntil: 'load' });
  await page.waitForSelector('figure[data-spec]', { timeout: 30000 });
  if (styleMode) await page.addStyleTag({ content: PIN });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(ready);
  await page.evaluate(() => document.querySelectorAll('svg').forEach(svg => { svg.pauseAnimations?.(); svg.setCurrentTime?.(0); }));
  return page.evaluate(styleMode ? STYLES : NORMALISE);
}

const browser = await launch();
const mk = async () => {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, ignoreHTTPSErrors: true, reducedMotion: 'reduce' });
  await ctx.addInitScript(seed);
  // Compare deterministic initial appearance. Live loops depend on when each
  // page intersects the viewport; exercise their behaviour separately.
  await ctx.addInitScript(() => {
    const NativeDate = window.Date;
    const fixed = NativeDate.parse('2026-10-16T00:00:00Z');
    function FixedDate(...args) { return new.target ? Reflect.construct(NativeDate, args.length ? args : [fixed]) : new NativeDate(fixed).toString(); }
    FixedDate.prototype = NativeDate.prototype;
    Object.setPrototypeOf(FixedDate, NativeDate);
    FixedDate.now = () => fixed;
    window.Date = FixedDate;
    window.setInterval = () => 0;
    window.requestAnimationFrame = () => 0;
    window.cancelAnimationFrame = () => {};
  });
  await ctx.addInitScript(() => { try { sessionStorage.setItem('hnx.boot.complete', '1'); } catch { /* storage unavailable */ } });
  return ctx.newPage();
};
const refPage = await mk();
const newPage = await mk();

let same = 0; let diff = 0; let missing = 0;
const bad = [];
for (const slug of slugs) {
  let a; let b;
  try {
    a = await grab(refPage, `${REF}/showcase/${slug}?view=sheet`, 250);
    b = await grab(newPage, `${BASE}/#/a/specimens/${slug}`, 250);
  } catch (e) { console.log(`ERROR ${slug}: ${e.message.split('\n')[0]}`); bad.push({ slug, error: e.message }); continue; }
  const ids = new Set([...Object.keys(a), ...Object.keys(b)]);
  let famSame = 0; const famBad = [];
  for (const id of ids) {
    if (!(id in a) || !(id in b)) { missing += 1; famBad.push({ id, why: id in a ? 'missing in port' : 'missing in source' }); continue; }
    if (styleMode) {
      const d = diffStyles(a[id], b[id]);
      if (!d.length) { same += 1; famSame += 1; } else { diff += 1; famBad.push({ id, why: `styles differ (${d.length}): ${d.slice(0, 3).join(' | ')}` }); }
    } else if (a[id] === b[id]) { same += 1; famSame += 1; } else { diff += 1; famBad.push({ id, why: 'DOM differs', a: a[id], b: b[id] }); }
  }
  console.log(`${slug.padEnd(12)} ${String(famSame).padStart(3)}/${ids.size} identical${famBad.length ? `  — ${famBad.length} differ` : ''}`);
  for (const f of famBad.slice(0, verbose ? 99 : 0)) {
    console.log(`   ${f.id}: ${f.why}`);
    if (f.a) { let i = 0; while (i < f.a.length && f.a[i] === f.b[i]) i += 1; console.log(`     source: …${f.a.slice(Math.max(0, i - 60), i + 120)}\n     port:   …${f.b.slice(Math.max(0, i - 60), i + 120)}`); }
  }
  bad.push(...famBad.map((f) => ({ slug, ...f })));
}
await browser.close();
console.log(`\n${same} specimens identical, ${diff} differ, ${missing} missing, across ${slugs.length} families`);
fs.writeFileSync(path.join(ROOT, `docs/generated/compare${styleMode ? '-styles' : ''}${only.length ? '-partial' : ''}-report.json`), JSON.stringify({ generatedAt: new Date().toISOString(), mode: styleMode ? 'computed styles' : 'DOM', state: 'Initial appearance: CSS and SVG animations, requestAnimationFrame and interval loops paused; fixed date and seeded random. Live interactions are verified separately.', reference: REF, same, diff, missing, families: slugs.length, bad: bad.map(({ a, b, ...r }) => r) }, null, 1));
process.exit(diff + missing + bad.filter((failure) => failure.error).length ? 1 : 0);
