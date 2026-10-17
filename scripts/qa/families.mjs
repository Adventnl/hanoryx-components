import assert from 'node:assert/strict';
import fs from 'node:fs';
import { launch, BASE } from './browser.mjs';

const manifest = JSON.parse(fs.readFileSync('docs/generated/manifest.json', 'utf8'));
const browser = await launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 1000 }, reducedMotion: 'reduce' });
const errors = [];
page.on('pageerror', error => errors.push(error.message));
page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
const passed = [];
async function open(name) {
  const entry = manifest.entries.find(entry => entry.area === 'kit' && entry.name === name);
  assert.ok(entry, name);
  await page.goto(`${BASE}/#/raw/${entry.id}`);
  await page.locator(`#raw-root[data-entry="${entry.id}"][data-ready="1"]`).waitFor();
  return page.locator('#raw-root');
}
try {
  let host = await open('DropdownMenuItem');
  const menuButton = host.getByRole('button', { name: 'Document menu', exact: true });
  await menuButton.focus(); await page.keyboard.press('ArrowDown');
  await host.getByRole('menuitem', { name: 'Duplicate', exact: true }).waitFor();
  assert.match(await page.evaluate(() => document.activeElement.textContent), /Duplicate/);
  await page.keyboard.press('ArrowDown');
  assert.equal(await page.evaluate(() => document.activeElement.getAttribute('role')), 'menuitemcheckbox');
  await page.keyboard.press('Enter');
  assert.equal(await host.getByRole('menuitemcheckbox').getAttribute('aria-checked'), 'true');
  await host.getByRole('menuitem', { name: /Export/ }).focus(); await page.keyboard.press('ArrowRight');
  await host.getByRole('menuitem', { name: 'CSV', exact: true }).waitFor();
  assert.equal(await page.evaluate(() => document.activeElement.textContent.trim()), 'CSV');
  await page.keyboard.press('ArrowLeft');
  assert.match(await page.evaluate(() => document.activeElement.textContent), /Export/);
  await page.keyboard.press('ArrowRight'); await page.keyboard.press('Enter');
  await page.waitForFunction(() => !document.querySelector('#raw-root [role="menu"]'));
  assert.match(await host.locator('output').textContent(), /Exported CSV/);
  assert.match(await page.evaluate(() => document.activeElement.textContent), /Document menu/);
  passed.push('dropdown keyboard skipping, checkbox state, submenu traversal and focus restoration');

  host = await open('CommandPalette');
  await host.getByRole('button', { name: 'Commands', exact: true }).click();
  const search = page.getByRole('searchbox', { name: 'Search commands' });
  await search.fill('not found');
  assert.equal(await page.getByText('No commands match.', { exact: true }).count(), 1);
  await search.fill('Export'); await page.keyboard.press('ArrowDown'); await page.keyboard.press('Enter');
  await page.getByRole('dialog').waitFor({ state: 'detached' });
  assert.match(await host.locator('output').textContent(), /Project exported/);
  await host.getByRole('button', { name: 'Bottom sheet', exact: true }).click();
  assert.equal(await page.getByRole('dialog').getAttribute('aria-modal'), 'true');
  await page.keyboard.press('Escape'); await page.getByRole('dialog').waitFor({ state: 'detached' });
  assert.equal(await page.evaluate(() => document.activeElement.textContent.trim()), 'Bottom sheet');
  passed.push('command filtering, empty state, keyboard activation and modal dismissal');

  host = await open('MultiSelector');
  await host.getByLabel('Teams', { exact: true }).selectOption(['design', 'build']);
  assert.deepEqual(await host.getByLabel('Teams', { exact: true }).evaluate(node => [...node.selectedOptions].map(option => option.value)), ['design', 'build']);
  await host.getByRole('searchbox', { name: 'Search projects', exact: true }).fill('landing');
  await host.getByLabel('Team', { exact: true }).selectOption('build');
  await host.getByRole('button', { name: 'Search', exact: true }).click();
  assert.deepEqual(JSON.parse(await host.locator('output').textContent()), { query: 'landing', filters: { team: 'build' } });
  passed.push('native multi-selection and structured search submission');

  host = await open('ClickableCard');
  const checkbox = host.getByRole('checkbox');
  await checkbox.check(); assert.equal(await checkbox.isChecked(), true);
  assert.equal(await host.getByText('Understand the problem.', { exact: true }).isVisible(), true);
  await host.getByRole('button', { name: 'Next slide' }).click();
  assert.equal(await host.getByText('Make the solution.', { exact: true }).isVisible(), true);
  assert.equal(await host.getByText('Understand the problem.', { exact: true }).isVisible(), false);
  passed.push('selectable cards and manual carousel slide visibility');

  host = await open('Tab');
  const overview = host.getByRole('tab', { name: 'Overview', exact: true });
  await overview.focus(); await page.keyboard.press('ArrowRight');
  assert.equal(await host.getByRole('tab', { name: 'Activity', exact: true }).getAttribute('aria-selected'), 'true');
  assert.match(await host.getByRole('tabpanel').textContent(), /Recent project activity/);
  passed.push('composable tab focus and host-managed panels');

  await page.goto(`${BASE}/#/a/kit/action`);
  await page.getByRole('heading', { name: 'Action', exact: true }).waitFor();
  const tree = page.getByRole('navigation', { name: 'Components' });
  const summary = tree.locator('summary').filter({ hasText: 'Dropdown Menu' });
  await summary.click();
  const group = summary.locator('..');
  assert.equal(await group.getByRole('link', { name: 'DropdownMenuSubmenu', exact: true }).isVisible(), true);
  fs.mkdirSync('.scratch', { recursive: true });
  await page.screenshot({ path: '.scratch/organization-desktop.png', fullPage: false });
  await page.setViewportSize({ width: 390, height: 844 });
  await open('TopNav');
  assert.ok(await page.locator('#raw-root').evaluate(node => node.scrollWidth <= node.clientWidth + 1));
  await page.screenshot({ path: '.scratch/organization-mobile.png', fullPage: false });
  passed.push('expandable docs navigation and mobile navigation width');
  assert.deepEqual(errors, []);
  console.log(`${passed.length} new family interaction groups passed.`);
} finally { await browser.close(); }
