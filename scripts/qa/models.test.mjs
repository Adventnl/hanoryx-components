import test from 'node:test';
import assert from 'node:assert/strict';
import { formatDate, monthDays, moveDate, parseDate, shiftMonth } from '../../src/kit/internal/calendar-model.js';
import { filterRows, flattenTree, sortRows, toggleKey } from '../../src/kit/internal/table-model.js';

test('civil dates retain leap days and reject impossible input', () => {
  assert.equal(formatDate(parseDate('2024-02-29')), '2024-02-29');
  for (const input of ['2023-02-29', '2024-02-30', '2024-13-01', 'not a date', '2024-2-1']) assert.equal(parseDate(input), null);
  assert.equal(moveDate('2024-02-28', 1), '2024-02-29');
  assert.equal(moveDate('2024-03-01', -1), '2024-02-29');
  assert.equal(moveDate('2026-12-31', 1), '2027-01-01');
  assert.equal(shiftMonth('2024-01-31', 1), '2024-02-29');
  assert.equal(shiftMonth('2024-02-29', 12), '2025-02-28');
});

test('calendar grids respect the first weekday and cover adjacent months', () => {
  const sunday = monthDays('2026-10', 0);
  const monday = monthDays('2026-10', 1);
  assert.equal(sunday.length, 42);
  assert.equal(sunday[0], '2026-09-27');
  assert.equal(monday[0], '2026-09-28');
  assert.equal(new Set(monday).size, 42);
  assert.deepEqual(monthDays('invalid'), []);
});

const rows = Object.freeze([Object.freeze({ id: 'a', name: 'Job 10', count: 2, status: 'live' }), Object.freeze({ id: 'b', name: 'Job 2', count: 2, status: 'paused' }), Object.freeze({ id: 'c', name: 'Export', count: 4, status: 'live' })]);
test('sorting is numeric-aware, stable in both directions, and immutable', () => {
  assert.deepEqual(sortRows(rows, { key: 'name', direction: 'ascending' }, []).map(r => r.id), ['c', 'b', 'a']);
  assert.deepEqual(sortRows(rows, { key: 'count', direction: 'descending' }, []).map(r => r.id), ['c', 'a', 'b']);
  assert.equal(sortRows(rows, { key: null, direction: 'none' }, []), rows);
  assert.deepEqual(rows.map(r => r.id), ['a', 'b', 'c']);
});

test('filters combine search, exact choices and derived column values', () => {
  assert.deepEqual(filterRows(rows, { query: 'JOB', filters: { status: ['live'] } }).map(r => r.id), ['a']);
  assert.equal(filterRows(rows, { filters: { status: [] } }).length, 3);
  assert.deepEqual(filterRows(rows, { query: 'busy' }, [{ key: 'summary', value: row => row.count > 2 ? 'Busy' : 'Quiet' }]).map(r => r.id), ['c']);
});

test('tree flattening retains hierarchy and rejects ambiguous visible keys', () => {
  const tree = [{ id: 'a', children: [{ id: 'b' }, { id: 'c', children: [{ id: 'd' }] }] }, { id: 'e' }];
  assert.deepEqual(flattenTree(tree, []).map(e => e.id), ['a', 'e']);
  const visible = flattenTree(tree, ['a', 'c']);
  assert.deepEqual(visible.map(e => e.id), ['a', 'b', 'c', 'd', 'e']);
  assert.equal(visible[3].depth, 3);
  assert.equal(visible[3].parentId, 'c');
  assert.equal(visible[2].position, 2);
  assert.throws(() => flattenTree([{ id: 'a' }, { id: 'a' }], []), /unique/);
  assert.throws(() => flattenTree([{}], []), /unique/);
});

test('selection changes do not mutate input keys', () => {
  const keys = Object.freeze(['a']);
  assert.deepEqual(toggleKey(keys, 'b'), ['a', 'b']);
  assert.deepEqual(toggleKey(keys, 'a'), []);
  assert.deepEqual(toggleKey(keys, 'a', true), ['a']);
  assert.deepEqual(keys, ['a']);
});
