#!/usr/bin/env node
import fs from 'node:fs';
import { pageRouteKeys, routePath } from '../../src/content/routeConfig.js';
import { launch } from './browser.mjs';

const manifest = JSON.parse(fs.readFileSync('docs/generated/manifest.json', 'utf8'));
const routes = [...new Set([...pageRouteKeys.map(routePath), '/showcase', ...manifest.families.map(family => `/showcase/${family.slug}`)])];
const browser = await launch();
const context = await browser.newContext({ reducedMotion: 'reduce', viewport: { width: 1280, height: 900 } });
await context.addInitScript(() => sessionStorage.setItem('hnx.boot.complete', '1'));
const page = await context.newPage();
let errors = [];
page.on('pageerror', error => errors.push(error.message));
const report = { generatedAt: new Date().toISOString(), base: process.env.CLONE_BASE || 'http://127.0.0.1:5200', expected: routes.length * 2, checked: 0, failures: [], overflows: [] };
try {
  for (const width of [360, 1280]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of routes) {
      errors = [];
      try {
        const response = await page.goto(`${report.base}${route}`, { waitUntil: 'load' });
        if (!response?.ok()) throw new Error(`HTTP ${response?.status()}`);
        await page.locator('main h1').first().waitFor({ state: 'attached', timeout: 15000 });
        await page.waitForTimeout(150);
        const size = await page.evaluate(() => ({ width: document.documentElement.clientWidth, scroll: document.documentElement.scrollWidth }));
        if (size.scroll > size.width + 1) report.overflows.push({ route, width, scrollWidth: size.scroll });
        if (errors.length) throw new Error(errors.join('; '));
      } catch (error) { report.failures.push({ route, width, error: error.message }); }
      report.checked += 1;
      if (report.checked % 25 === 0) console.log(`${report.checked}/${report.expected} clone route/viewport checks; ${report.failures.length} failures`);
    }
  }
} finally {
  await browser.close();
  fs.writeFileSync('docs/generated/clone-report.json', JSON.stringify(report, null, 2));
}
console.log(`${report.checked} clone route/viewport checks; ${report.failures.length} failures; ${report.overflows.length} page overflows.`);
process.exitCode = report.failures.length || report.overflows.length ? 1 : 0;
