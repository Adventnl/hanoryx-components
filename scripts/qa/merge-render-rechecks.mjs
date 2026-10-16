#!/usr/bin/env node
/* Retain the complete run and its history while applying explicitly scoped
   three-width reruns after repairs. Never treat a partial run as a full run. */
import assert from 'node:assert/strict';
import fs from 'node:fs';

const file = 'docs/generated/render-report.json';
const report = JSON.parse(fs.readFileSync(file, 'utf8'));
const measurements = JSON.parse(fs.readFileSync('docs/generated/sizing.json', 'utf8'));
assert.equal(report.checked, report.expected, 'The original full run must have completed.');
assert.equal(report.scope.only, null, 'The baseline must be a full run.');
report.initialFindings ??= { failures: report.failures, overflows: report.overflows };
report.rechecks ??= [];
for (const input of process.argv.slice(2)) {
  const rerun = JSON.parse(fs.readFileSync(input, 'utf8'));
  const ids = rerun.scope.only;
  assert.ok(Array.isArray(ids) && ids.length, 'A rerun must explicitly list its checked ids.');
  assert.equal(rerun.checked, ids.length);
  assert.equal(rerun.expected, ids.length);
  assert.deepEqual(rerun.scope.widths, report.scope.widths, 'Reruns must use every original parent width.');
  const tested = new Set(ids);
  for (const id of ids) if (!rerun.failures.some(failure => failure.id === id)) {
    for (const width of report.scope.widths) assert.ok(measurements[id]?.measured?.at[width], `Missing measured ${width}px result for ${id}`);
  }
  for (const field of ['failures', 'overflows', 'expectedOverflows']) report[field] = [...(report[field] ?? []).filter(item => !tested.has(item.id)), ...(rerun[field] ?? [])];
  report.rechecks.push(rerun);
}
report.validatedAt = new Date().toISOString();
fs.writeFileSync(file, JSON.stringify(report, null, 1));
console.log(`Complete coverage retained: ${report.checked}/${report.expected}; ${report.failures.length} failures; ${report.overflows.length} unexpected overflows; ${(report.expectedOverflows ?? []).length} documented visual-bleed cases. ${report.rechecks.length} scoped reruns retained as evidence.`);
process.exitCode = report.failures.length || report.overflows.length ? 1 : 0;
