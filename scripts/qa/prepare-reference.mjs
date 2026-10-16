#!/usr/bin/env node
/* Make a disposable source snapshot so the reference repository remains read-only.
   Pass its root as the first argument. Dependencies resolve from this workspace. */
import fs from 'node:fs';
import path from 'node:path';

const reference = path.resolve(process.argv[2] || '../hanoryx-web');
const scratch = path.resolve('.scratch');
fs.mkdirSync(scratch, { recursive: true });
const destination = fs.mkdtempSync(path.join(scratch, 'reference-'));
for (const name of ['src', 'public', 'index.html', 'vite.config.js', 'package.json']) {
  const source = path.join(reference, name);
  if (fs.existsSync(source)) fs.cpSync(source, path.join(destination, name), { recursive: true });
}
console.log(destination);
