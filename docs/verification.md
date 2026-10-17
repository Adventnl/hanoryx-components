# Verification

`npm run check` checks relative imports, generated barrels and docs, catalog import/source agreement, token use and stylesheet scoping, and ESLint. It does not regenerate files to conceal stale output. Run `npm run barrels` and `npm run docs:generate` after intentional API or documentation changes.

`npm test` covers civil-date boundaries, stable sorting, filtering, tree metadata and immutable selection. With the docs server running, `npm run qa:interactions` checks the calendar keyboard model, range errors, chat sending and retry, resizing, rich-text sanitization/formatting and the table hooks composed together. Its fixture is not a product route.

The catalog tests also require all 102 requested overview names, their documented
categories, the nested parts inventory and preservation of existing kit IDs.
`npm run qa:families` checks the added menu, command, selector, card, tab and docs
navigation interactions. `npm run qa:hooks` checks headless selectors, focus
trapping, merged-ref stability, hotkeys and asynchronous renderer cleanup/errors.
The kit's three-width render run covers 221 visual entries. Parts shown in a
family composition report that scope; those measurements describe the example.

## Complete render and sizing run

Start `npm run dev`, then run `npm run docs:sizing`. The render script checks every previewable entry in parents of 360, 768 and 1200 pixels. Its browser viewport stays constant: these are parent-width measurements, not three viewport screenshots. The clone smoke check below separately tests actual mobile and desktop viewports.

`docs/generated/render-report.json` records a complete run's scope, expected count, checked count, failures and overflow cases. Filtered `--area`, `--only`, or `--limit` runs write `render-partial-report.json` so they cannot replace the full report. Failed measurements are not published. Parts that require a containing chat, table or split layout are marked as contextual examples. Core hooks/utilities have no visual box; shell and scroll stages use whole-page previews.

After a repair, `node scripts/qa/merge-render-rechecks.mjs <saved-partial-report> ...` applies explicitly listed three-width reruns to the complete report. It requires completed counts and matching measurement widths, keeps the original findings, and embeds each rerun as evidence. This avoids repeating thousands of unaffected previews while preserving full coverage.

Four source specimens deliberately draw beyond their bare root: NumberLine's endpoint markers, LineMap's train/labels, ScatterWords' translated text, and Cutline's external image credit. Their entries document this visual bleed and show a Specimen frame as the recommended composition. These are recorded separately as `expectedOverflows`; other horizontal overflows fail the render command. The clone's mobile and desktop stage checks validate their normal framed use.

## Reference comparison without editing the source repository

Run `node scripts/qa/prepare-reference.mjs ../hanoryx-web`. It prints a disposable directory under `.scratch/`. Start that copy with the workspace's Vite binary, using the printed directory as both root and config location:

```text
node node_modules/vite/bin/vite.js <directory> --config <directory>/vite.config.js --host 127.0.0.1 --port 5301
```

Keep the docs site running at 5199. Run `npm run qa:compare` for DOM structure and `npm run qa:compare -- --styles` for geometry and computed styles. These cover all 2,091 specimens in all 50 families. `REF_BASE` and `QA_BASE` override the addresses.

The comparison verifies initial appearance. CSS/SVG animations, interval timers and animation frames are paused, the date is fixed and randomness seeded. Class hashes and generated ids are normalized. The library's scoped `--prog-v` implementation is normalized to the source's `--v`; computed styles independently verify its result. Elements without a rendered box have no meaningful relative position. These are deliberate normalization rules, not ignored visual failures. Interactive behavior and animation lifecycle need the separate browser checks.

Complete comparison runs write `compare-report.json` and `compare-styles-report.json`. Family-filtered runs write separate partial reports. Navigation or browser errors produce a failing exit code.

## Clone

Build `examples/hanoryx-web-clone`, serve it at port 5200, and run `node scripts/qa/clone-smoke.mjs`. It visits every data page, the showcase index and each showcase stage at actual 360- and 1280-pixel viewport widths, checking for a page heading, runtime errors and page-level horizontal overflow. Results are saved in `docs/generated/clone-report.json`. `CLONE_BASE` overrides the address.

The root build verifies the documentation site; the example build verifies an application consuming the package exports. Rebuilding both is part of the final gate. Build chunk-size warnings are separate from correctness failures.
