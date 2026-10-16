# Where things came from

Everything in `src/` was extracted from `hanoryx-web/src` by script — files moved, imports rewritten to match, nothing rewritten by hand except where noted below. The columns are directories in `hanoryx-web/src` and in this repository.

## Directory map

| `hanoryx-web/src/…` | `hanoryx-components/src/…` | Files |
| --- | --- | --- |
| `assets` | `assets` | 1 |
| `components/closers` | `closers` | 173 |
| `app` | `content` | 1 |
| `data` | `content` | 10 |
| `hooks` | `core/hooks` | 10 |
| `animation` | `core/motion` | 8 |
| `animation/catalog` | `core/motion` | 1 |
| `performance` | `core/performance` | 2 |
| `app/providers` | `core/providers` | 7 |
| `data` | `core/site` | 1 |
| `utils` | `core/utils` | 9 |
| `components/fx` | `fx` | 34 |
| `components/kit` | `kit` | 1 |
| `components/kit` | `kit/content` | 13 |
| `components/kit` | `kit/data` | 12 |
| `components/kit/demos` | `kit/demos` | 7 |
| `components/kit` | `kit/feedback` | 10 |
| `components/kit` | `kit/inputs` | 16 |
| `components/kit` | `kit/internal` | 5 |
| `components/kit` | `kit/navigation` | 9 |
| `components/kit` | `kit/overlays` | 7 |
| `components/page` | `page` | 6 |
| `pages` | `page` | 3 |
| `components/page/blocks` | `page/blocks` | 23 |
| `animation/reveal` | `reveal` | 5 |
| `components/scenes` | `scenes` | 4 |
| `animation/scenes` | `scenes/library` | 27 |
| `animation/scenes/presets` | `scenes/library/presets` | 42 |
| `animation/scenes/primitives` | `scenes/library/primitives` | 1 |
| `features/audio` | `shell/audio` | 4 |
| `features/cursor` | `shell/cursor` | 2 |
| `components/effects` | `shell/effects` | 10 |
| `features/experience` | `shell/experience` | 4 |
| `components/layout` | `shell/layout` | 11 |
| `features/navigation` | `shell/navigation` | 12 |
| `features/search` | `shell/search` | 4 |
| `features/shortcuts` | `shell/shortcuts` | 5 |
| `features/transitions` | `shell/transitions` | 3 |
| `components/signatures` | `signatures` | 181 |
| `showcase` | `specimens` | 1 |
| `showcase` | `stage` | 18 |
| `showcase/stages` | `stage/stages` | 6 |
| `styles` | `styles` | 7 |
| `components/ui` | `ui` | 12 |

## Specimens

The 50 pages in `showcase/pages/` (a JSX module and a CSS module each, 2,091 specimens between them) were split by a syntax-tree script: each specimen became its own file in `specimens/<family>/`; a helper used by one specimen moved into that file, a helper used by two or more went to the family's `shared.jsx`; the CSS module moved unchanged beside them; a generated `index.js` lists the specimens in page order. The data-built families (`drift`, `waves`, `morphs`, `patterns`, `wipes`, `cockpit`) were split row by row.

| Family | Specimens | Files |
| --- | --- | --- |
| `specimens/switchboard` | 40 | 42 |
| `specimens/dials` | 40 | 43 |
| `specimens/faders` | 40 | 43 |
| `specimens/keypads` | 40 | 43 |
| `specimens/fields` | 40 | 42 |
| `specimens/gauges` | 42 | 45 |
| `specimens/charts` | 42 | 45 |
| `specimens/matrices` | 42 | 45 |
| `specimens/figures` | 42 | 45 |
| `specimens/graphs` | 42 | 45 |
| `specimens/kinetic` | 42 | 45 |
| `specimens/tickers` | 42 | 45 |
| `specimens/markup` | 42 | 44 |
| `specimens/glyphs` | 42 | 45 |
| `specimens/editorial` | 42 | 44 |
| `specimens/tilt` | 42 | 45 |
| `specimens/glow` | 42 | 45 |
| `specimens/fold` | 42 | 45 |
| `specimens/bento` | 42 | 45 |
| `specimens/passes` | 42 | 45 |
| `specimens/tabs` | 42 | 45 |
| `specimens/docks` | 42 | 44 |
| `specimens/menus` | 42 | 45 |
| `specimens/steps` | 42 | 45 |
| `specimens/waypoints` | 42 | 45 |
| `specimens/loaders` | 42 | 45 |
| `specimens/toasts` | 42 | 45 |
| `specimens/progress` | 42 | 45 |
| `specimens/skeletons` | 42 | 45 |
| `specimens/signals` | 42 | 45 |
| `specimens/popovers` | 42 | 45 |
| `specimens/sheets` | 42 | 45 |
| `specimens/cursors` | 42 | 45 |
| `specimens/wipes` | 42 | 45 |
| `specimens/lenses` | 42 | 45 |
| `specimens/cockpit` | 42 | 45 |
| `specimens/studio` | 42 | 45 |
| `specimens/terminal` | 42 | 45 |
| `specimens/stamps` | 42 | 45 |
| `specimens/archive` | 42 | 45 |
| `specimens/beams` | 42 | 45 |
| `specimens/patterns` | 43 | 46 |
| `specimens/drift` | 42 | 45 |
| `specimens/waves` | 42 | 45 |
| `specimens/morphs` | 42 | 45 |
| `specimens/handset` | 42 | 45 |
| `specimens/boards` | 42 | 45 |
| `specimens/feeds` | 42 | 45 |
| `specimens/checkout` | 42 | 45 |
| `specimens/heroes` | 42 | 45 |

## What was written by hand

| File | Why |
| --- | --- |
| `core/site/sources.js`, `core/site/pageCatalog.js`, `shell/search/searchIndex.js`, `page/TemplatePage.jsx` | The site loaded its page data and two generated JSON indexes with build-time imports. They are now registered by the app (`configureSite`). |
| `core/utils/assetResolver.js`, `core/providers/AudioProvider.jsx` | The intro track and the partner logo are not shipped; `configureAssets` registers them. |
| `core/providers/HanoryxProvider.jsx` | New: the provider stack and start-up calls from `App.jsx` in one component. |
| `stage/loader.js` | Points at the specimen families instead of `showcase/pages/*.jsx`. |
| `*/index.js` | Generated barrels (`scripts/generate-barrels.mjs`). |
| `*.doc.mjs` | Documentation: kit docs were converted from `data/kit.js`; fx, ui and block docs were written for this library. |

## Not ported

- `data/pages/*` (86 page data files), `data/{systems,timeline,capabilities,legalTerms,kitPages}.js`: the website's content, not components. They live in `examples/hanoryx-web-clone/`.
- `app/App.jsx`, `app/routes.jsx`, `main.jsx`: the app glue — rebuilt in `examples/hanoryx-web-clone/` from library parts.
- `assets/music.mp3` (its origin is an open question in the source repo) and `assets/Musebase.jpg`.
