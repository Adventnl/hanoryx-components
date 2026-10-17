import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { launch, BASE } from './browser.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const browser = await launch();
const page = await browser.newPage({ reducedMotion: 'reduce' });
const errors = [];
page.on('pageerror', error => errors.push(error.message));
try {
  await page.goto(`${BASE}/#/raw/none`);
  await page.evaluate(async url => { const fixture = await import(url); window.unmountKit = fixture.mount(); }, `/@fs/${root.replaceAll('\\', '/')}/scripts/qa/fixtures/KitHarness.jsx`);
  const host = page.locator('[data-kit-harness]');
  await host.waitFor();
  const single = host.getByRole('region', { name: 'Single hook' });
  await single.getByRole('combobox').focus(); await page.keyboard.press('ArrowDown');
  assert.match(await single.getByRole('combobox').getAttribute('aria-activedescendant'), /-1$/);
  await page.keyboard.press('Enter');
  assert.equal(await single.locator('output').textContent(), '"beta"');
  const multi = host.getByRole('region', { name: 'Multi hook' });
  await multi.getByRole('combobox').fill('Alpha'); await page.keyboard.press('Enter');
  assert.equal(await multi.locator('output').textContent(), '["alpha"]');
  await multi.getByRole('combobox').fill('Beta'); await page.keyboard.press('Enter');
  assert.equal(await multi.locator('output').textContent(), '["alpha","beta"]');
  await multi.getByRole('combobox').fill('Alpha'); await page.keyboard.press('Enter');
  assert.equal(await multi.locator('output').textContent(), '["beta"]');

  await host.getByRole('button', { name: 'Open focus region', exact: true }).click();
  await page.waitForFunction(() => document.activeElement.textContent === 'First target');
  await page.keyboard.press('Shift+Tab');
  assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Close focus region');
  await page.keyboard.press('Tab');
  assert.equal(await page.evaluate(() => document.activeElement.textContent), 'First target');
  await host.getByRole('button', { name: 'Close focus region', exact: true }).click();
  assert.equal(await page.evaluate(() => document.activeElement.textContent), 'Open focus region');

  await host.getByRole('button', { name: 'Rerender refs' }).click();
  await host.getByRole('button', { name: 'Inspect refs' }).click();
  assert.deepEqual(JSON.parse(await host.locator('[data-ref-report]').textContent()), { attaches: 1, cleanups: 0, assigned: true });
  await page.keyboard.press('Control+Shift+y');
  assert.equal(await host.locator('[data-hotkeys]').textContent(), '2');
  await host.getByLabel('Merged input').focus(); await page.keyboard.press('Control+Shift+y');
  assert.equal(await host.locator('[data-hotkeys]').textContent(), '2');

  await host.getByRole('button', { name: 'Replace chart' }).click();
  await page.waitForFunction(() => window.kitLifecycle.created === 2 && window.kitLifecycle.disposed === 1);
  assert.equal(await host.getByRole('figure', { name: 'Renderer lifecycle' }).textContent(), 'Latest chart');
  await host.getByRole('button', { name: 'Fail chart' }).click();
  await host.getByRole('alert').waitFor();
  assert.match(await host.getByRole('alert').textContent(), /Renderer rejected/);
  await page.evaluate(() => window.unmountKit());
  assert.deepEqual(await page.evaluate(() => window.kitLifecycle), { created: 2, disposed: 2 });
  assert.deepEqual(errors, []);
  console.log('4 headless hook and renderer lifecycle groups passed.');
} finally { await browser.close(); }
