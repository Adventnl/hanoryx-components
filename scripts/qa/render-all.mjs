#!/usr/bin/env node
/* Renders every previewable entry on a bare page, at three parent widths, in a
   real browser — and records what each one does.

     node scripts/qa/render-all.mjs [--area specimens] [--only id,id] [--limit N]
                                    [--workers 4] [--widths 360,768,1200] [--no-write]

   It needs the docs site running (npm run dev, or npm run preview after a build;
   QA_BASE points at it). It writes
     docs/generated/sizing.json        measured sizes, the input to the manifest
     docs/generated/render-report.json every console error, page error and overflow

   Exit code 1 when any entry throws, logs a console error or fails to render. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { launch, BASE } from './browser.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const args = process.argv.slice(2);
const opt = (name, fallback) => { const i = args.indexOf(`--${name}`); return i >= 0 ? args[i + 1] : fallback; };
const flag = (name) => args.includes(`--${name}`);
const WIDTHS = opt('widths', '360,768,1200').split(',').map(Number);
const WORKERS = Number(opt('workers', 4));
const AREAS = opt('area', 'kit,fx,ui,page,signatures,closers,specimens,scenes,reveal').split(',');
const ONLY = opt('only', '') ? opt('only').split(',') : null;
const LIMIT = Number(opt('limit', 0));

const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'docs/generated/manifest.json'), 'utf8'));
let entries = manifest.entries.filter((e) => AREAS.includes(e.area) && !['hook', 'function'].includes(e.kind));
if (ONLY) entries = entries.filter((e) => ONLY.includes(e.id));
if (LIMIT) entries = entries.slice(0, LIMIT);

// Wide compositions are measured once (they are page sections: they fill any parent).

async function measure(page) {
  return page.evaluate(() => {
    const root = document.getElementById('raw-root');
    if (!root) return null;
    const overlay = document.querySelector('[role="dialog"], [role="alertdialog"]');
    const kids = [...root.children].filter((k) => { const r = k.getBoundingClientRect(); return r.width > 0 || r.height > 0; });
    const target = overlay ?? kids[0] ?? null;
    let rect = null;
    if (overlay) rect = overlay.getBoundingClientRect();
    else if (kids.length) {
      const rs = kids.map((k) => k.getBoundingClientRect());
      const l = Math.min(...rs.map((r) => r.left)); const t = Math.min(...rs.map((r) => r.top));
      const rt = Math.max(...rs.map((r) => r.right)); const b = Math.max(...rs.map((r) => r.bottom));
      rect = { width: rt - l, height: b - t };
    }
    const cs = target ? getComputedStyle(target) : null;
    // the smallest interactive thing inside, for touch-target guidance
    const controls = [...root.querySelectorAll('button, a[href], input, select, textarea, [role="switch"], [role="tab"], [role="slider"]')].map((c) => c.getBoundingClientRect()).filter((r) => r.width && r.height);
    const smallest = controls.length ? controls.reduce((m, r) => (r.height < m.height ? r : m)) : null;
    return {
      w: rect ? Math.round(rect.width * 10) / 10 : 0,
      h: rect ? Math.round(rect.height * 10) / 10 : 0,
      overflowX: root.scrollWidth > root.clientWidth + 1,
      scrollW: root.scrollWidth,
      empty: !kids.length && !overlay,
      display: cs?.display, padding: cs?.padding, gap: cs?.gap === 'normal' ? undefined : cs?.gap, radius: cs?.borderRadius, fontSize: cs?.fontSize,
      smallest: smallest ? `${Math.round(smallest.width)}×${Math.round(smallest.height)}` : undefined,
    };
  });
}

function classify(at, widths) {
  const ws = widths.map((w) => ({ p: w, w: at[w].w }));
  const tracks = ws.every((x) => Math.abs(x.w - x.p) <= 2);
  if (tracks) return 'fill';
  const first = ws[0];
  const spread = Math.max(...ws.map((x) => x.w)) - Math.min(...ws.map((x) => x.w));
  if (spread <= 2) return 'intrinsic';
  if (Math.abs(first.w - first.p) <= 2) return 'capped';
  return 'fluid';
}

const browser = await launch();
const queue = [...entries];
const sizing = {};
const report = { generatedAt: new Date().toISOString(), scope: { areas: AREAS, only: ONLY, limit: LIMIT, widths: WIDTHS }, expected: entries.length, checked: 0, failures: [], overflows: [], expectedOverflows: [], empty: [] };
const started = Date.now();

async function worker() {
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, ignoreHTTPSErrors: true, reducedMotion: 'reduce' });
  const page = await ctx.newPage();
  let errors = [];
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text().slice(0, 300)); });
  page.on('pageerror', (e) => errors.push(`PAGEERROR ${e.message}`.slice(0, 300)));
  await page.goto(`${BASE}/#/raw/none`, { waitUntil: 'load' });
  while (queue.length) {
    const e = queue.shift();
    const widths = WIDTHS;
    const at = {};
    let fail = null;
    for (const w of widths) {
      errors = [];
      try {
        await page.evaluate((h) => { location.hash = h; }, `#/raw/${e.id}?w=${w}`);
        await page.waitForSelector(`#raw-root[data-entry="${e.id}"][data-ready="1"]`, { timeout: 15000, state: 'attached' });
        const m = await measure(page);
        at[w] = m;
        if (m?.empty) fail = fail ?? 'rendered nothing';
        if (m?.overflowX && w >= 360) {
          const item = { id: e.id, width: w, scrollW: m.scrollW };
          if (e.sizing?.overflow) report.expectedOverflows.push({ ...item, reason: e.sizing.overflow });
          else report.overflows.push(item);
        }
      } catch (err) {
        fail = fail ?? `timeout waiting for render (${err.message.split('\n')[0]})`;
      }
      if (errors.length) fail = fail ?? errors[0];
    }
    report.checked += 1;
    if (fail) report.failures.push({ id: e.id, error: fail });
    const ok = widths.filter((w) => at[w]);
    if (!fail && ok.length === widths.length) {
      const natural = at[widths[widths.length - 1]];
      const entry = {
        behavior: widths.length > 1 ? classify(Object.fromEntries(ok.map((w) => [w, at[w]])), widths) : 'fill',
        at: Object.fromEntries(widths.map((w) => [w, { w: at[w].w, h: at[w].h }])),
        padding: natural.padding, gap: natural.gap, radius: natural.radius, fontSize: natural.fontSize, minTouch: natural.smallest,
        overflowsAt360: widths.includes(360) ? Boolean(at[360].overflowX) : undefined,
        scope: e.sizing?.scope ?? (e.parent ? `Contextual example including ${e.parent}` : 'Standalone preview'),
      };
      sizing[e.id] = { measured: Object.fromEntries(Object.entries(entry).filter(([, v]) => v !== undefined)) };
    }
    if (report.checked % 100 === 0) console.log(`${report.checked}/${entries.length}  (${Math.round((Date.now() - started) / 1000)}s)  failures ${report.failures.length}`);
  }
  await ctx.close();
}

await Promise.all(Array.from({ length: WORKERS }, () => worker()));
await browser.close();

console.log(`rendered ${report.checked} entries in ${Math.round((Date.now() - started) / 1000)}s — ${report.failures.length} failures, ${report.overflows.length} unexpected width overflows, ${report.expectedOverflows.length} documented visual-bleed cases`);
report.failures.slice(0, 40).forEach((f) => console.log('FAIL', f.id, '—', f.error));
if (!flag('no-write')) {
  fs.mkdirSync(path.join(ROOT, 'docs/generated'), { recursive: true });
  const partial = ONLY || LIMIT || args.includes('--area');
  const prev = fs.existsSync(path.join(ROOT, 'docs/generated/sizing.json')) && partial ? JSON.parse(fs.readFileSync(path.join(ROOT, 'docs/generated/sizing.json'), 'utf8')) : {};
  for (const entry of entries) delete prev[entry.id];
  fs.writeFileSync(path.join(ROOT, 'docs/generated/sizing.json'), JSON.stringify({ ...prev, ...sizing }));
  fs.writeFileSync(path.join(ROOT, `docs/generated/${partial ? 'render-partial-report' : 'render-report'}.json`), JSON.stringify(report, null, 1));
}
process.exit(report.failures.length || report.overflows.length ? 1 : 0);
