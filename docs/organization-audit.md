# Code Cleanup Report — library organization and component discovery

## Scorecard

| Category | Rating |
| --- | --- |
| Architecture & layering | Needs work: catalog discovery assumed flat source folders |
| File size & granularity | Fail: 260 closer files and 272 signature files in flat folders |
| DRY & reuse | Needs work: requested names need aliases where implementations already exist |
| Hardcoding / magic values | Needs work: generators encode flat paths |
| Types & correctness | Needs work: moved exports must retain resolvable catalog sources |
| Async & error handling | Pass within the structural changes inspected |
| State management | Pass within the structural changes inspected |
| Performance & complexity | Needs work: recursive catalog discovery needs per-family indexes |
| Density & clarity | Needs work: folders obscure component boundaries |
| Naming & readability | Needs work: top-level names hide related parts |
| Security | Pass within the structural changes inspected |
| Tests & quality gates | Needs work: add coverage and browser checks for new families |

Overall: organization and discovery need correction before this is straightforward
to use. This is a structural audit, not a certification of every existing specimen.

## Findings

### P0 — Critical

None identified in this scope.

### P1 — High

- `src/signatures/registry.js:1` and the adjacent 272 files mix independent
  compositions at one level. Fix: component folders and updated lazy imports.
- `src/closers/registry.js:1` and the adjacent 260 files have the same problem.
- `scripts/generate-manifest.mjs:139` scans only immediate children. Fix: recursive
  discovery with stable catalog IDs and indexed specimen sources.

### P2 — Medium

- `site/src/Layout.jsx:1` lists categories without exposing component families and
  parts. Fix: a dedicated catalog tree with expandable families.
- `src/kit/navigation/DropdownMenu.jsx:1` (original path) supports only an action
  array. Fix: reusable item/group/checkbox/radio/submenu parts with keyboard tests.

### P3 — Nits

- Repository instructions describe the previous flat layout. Update the map and
  explain focused imports and authored specimen metadata.

## Remediation plan

1. Move independent components and companions together; rewrite all module paths.
2. Update generators and preserve published names and existing catalog IDs.
3. Add missing kit families, reuse matching controls through documented aliases.
4. Expose all parts in the docs; add contextual interactive examples.
5. Run coverage, model, browser, lint, import, token, barrel and build checks.

No independent reference repositories are edited. Unrelated behavior in existing
specimens is outside this organization and component-coverage change.

## Verified result

Inspected source organization, exports, generators and component discovery.
Fixed the three P1, two P2 and one P3 structural findings above. Also fixed a
modal opening focus race found by the new keyboard checks. Nothing in the
requested organization or named component inventory is deferred.

Moved 3,175 existing files into component/support folders; the change touches
6,717 added, removed or modified file paths because moves are counted at both
ends before staging. The largest source folder now contains 11 JS/JSX files.
The kit has 279 entries, including aliases and 58 hooks, across eleven categories.
All 102 requested overview names and the additional parts inventory are checked.
Every existing catalog ID is preserved.

- `npm run check`: imports (8,757), barrels, manifest, catalog/source agreement,
  CSS tokens and ESLint pass.
- `npm test`: ten tests pass, including four added catalog/Markdown checks.
- `npm run qa:families`: six browser interaction groups pass.
- `npm run qa:hooks`: four headless/lifecycle groups pass.
- `npm run qa:interactions`: seven existing browser groups pass.
- `node scripts/qa/render-all.mjs --area kit --workers 4`: 221 visual entries at
  360/768/1200 parent widths; zero failures and zero unexpected overflows.
- `npm run build` and `npm --prefix examples/hanoryx-web-clone run build`: pass;
  no namespace conflicts. The example retains a bundle chunk-size warning.
- `git diff --check`: passes.

The added tests cover the requested inventory, old URLs, family membership,
Markdown link boundaries, menu/submenu focus, command filtering, selectors,
cards, tabs, modal focus, refs, hotkeys and renderer cleanup/errors. Contextual
measurements describe complete family examples. Vega requires a host-supplied
renderer; alternate themes require host token overrides. This is a Hanoryx
implementation, with no promise of Astryx API parity. No unrelated features added.
