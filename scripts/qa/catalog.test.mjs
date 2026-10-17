import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { kitRequirements, requiredParts } from '../lib/kit-requirements.mjs';
import { safeHref } from '../../src/kit/content/markdown/internal/markdown-model.js';
import { groupKit } from '../../site/src/navigation/catalog-groups.js';

const manifest = JSON.parse(fs.readFileSync(new URL('../../docs/generated/manifest.json', import.meta.url)));
const kit = manifest.entries.filter(entry => entry.area === 'kit');
test('all 102 overview names and requested nested parts remain discoverable', () => {
  assert.equal(Object.values(kitRequirements).flat().length, 102);
  for (const [category, names] of Object.entries(kitRequirements)) for (const name of names) {
    const entry = kit.find(entry => entry.name === name);
    assert.ok(entry, `Missing ${name}`);
    assert.equal(entry.family, category, `Wrong category for ${name}`);
    assert.ok(entry.documented, `Missing usage docs for ${name}`);
  }
  for (const name of requiredParts) assert.ok(manifest.entries.some(entry => entry.name === name), `Missing nested entry ${name}`);
});
test('existing kit names and catalog URLs survive the folder migration', () => {
  const previous = JSON.parse(fs.readFileSync(new URL('../lib/kit-legacy-ids.json', import.meta.url)));
  for (const [name, id] of Object.entries(previous)) assert.equal(kit.find(entry => entry.name === name)?.id, id, name);
});
test('the docs tree includes every kit entry exactly once and keeps dropdown parts together', () => {
  for (const entry of kit) assert.ok(entry.summary?.trim(), `Missing summary for ${entry.name}`);
  const groups = groupKit(kit);
  const grouped = [...groups.values()].flatMap(category => [...category.values()].flatMap(group => group.entries));
  assert.equal(grouped.length, kit.length);
  assert.equal(new Set(grouped.map(entry => entry.id)).size, kit.length);
  const dropdown = groups.get('action').get('dropdown-menu').entries;
  for (const name of ['DropdownMenu', 'DropdownMenuSubmenu', 'DropdownMenuRadioItem', 'DropdownMenuCheckboxItem']) assert.ok(dropdown.some(entry => entry.name === name));
});
test('Markdown rejects executable, obfuscated and protocol-relative links', () => {
  for (const href of ['javascript:alert(1)', 'data:text/html,hello', '//evil.test', '\\evil.test', 'java\nscript:alert(1)', 'https://a.test/\u0000x']) assert.equal(safeHref(href), null);
  for (const href of ['https://example.com/page', '/projects', '#details', 'mailto:test@example.com', '../guide']) assert.equal(safeHref(href), href);
});
