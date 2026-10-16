# hanoryx-components — instructions for agents

Read this first. It is the one instruction file for the repository; nested `AGENTS.md` files (if any) add path-specific rules only.

## What this repository is

The Hanoryx Systems interface, extracted from the website (`hanoryx-web`) and organised as a library: **React 19 + CSS Modules, published as source.** A site built from it needs no new components. **2,604 catalogued pieces** in twelve areas; a docs site (`npm run dev`) shows each live with its props and measured size.

`hanoryx-web` and `astryx` are reference only. Never edit them from here.

## Start here

```bash
npm install
npm run hx -- areas                         # the map
npm run hx -- search <word>                 # find before you write
npm run hx -- component <Name> --dense      # props, size, keys, example — before you use it
npm run hx -- docs sizing                   # sizes, ratios, padding
npm run dev                                 # the docs site, http://127.0.0.1:5199
```

Read `llms.txt` (the map), `docs/sizing.md` (sizes), `docs/layout-recipes.md` (page skeletons), `docs/principles.md` (the look).

## Layout

```
src/
  styles/        tokens.css and the global sheet            -> 'hanoryx-components/styles'
  core/          hooks, providers, motion engine, utilities  -> '…/core'
  kit/           interface kit, 6 families                   -> '…/kit'
  fx/ ui/        foreground toolkit; the site's own UI       -> '…/fx' '…/ui'
  page/          hero, page blocks, page template            -> '…/page'
  shell/         navbar, footer, search, shortcuts, cursor…  -> '…/shell'
  reveal/ scenes/  entrance animation; canvas scenes         -> '…/reveal' '…/scenes'
  signatures/ closers/  page compositions; page endings      -> '…/signatures' '…/closers'
  specimens/<family>/   2,091 stand-alone pieces, 50 families -> '…/specimens/<family>'
  stage/         scroll stages that present specimens        -> '…/stage'
  content/       default copy and config the shell reads
docs/            guides; docs/generated/ is built, do not hand-edit
site/            the docs site (Vite)
examples/        apps built only from the library
scripts/ bin/    generators, QA, the `hanoryx` CLI
```

A component is `Name.jsx` + `Name.module.css` (+ `Name.doc.mjs`). Specimens: one file per specimen in `src/specimens/<family>/`, with the family's `<family>.module.css`, a `shared.jsx` for helpers two or more specimens use, and an `index.js` listing them in page order.

## Rules for changes

- **Tokens only** in CSS (`var(--space-4)`, `var(--c-white-65)`, `var(--r-md)`, `var(--dur-2)`). No hex, no `px` font sizes, no raw durations. Component CSS is a CSS Module beside the component.
- **Names and keyboards.** Every interactive element has a text name and works from the keyboard. Tone is never colour alone.
- **Motion** is transform/opacity; loops run only while on screen (`useOnScreen`/`useLive`) and never under `prefers-reduced-motion`.
- **No width/height/margin/padding on a library component from outside.** The parent sizes; the component pads itself.
- **A router is assumed** (react-router 7). Links go through `Link`/`ArrowLink`/`Button to=`.
- **No third-party assets in the repo** (no audio, no photographs, no fonts). `configureAssets` registers what an app brings.
- Barrels (`index.js`) are generated: `node scripts/generate-barrels.mjs`. Do not edit them by hand.
- Docs: a component's hand-written doc is `Name.doc.mjs` (`export const docs = { summary, props, keyboard, notes, examples, sizing.rules, … }`); `node scripts/generate-manifest.mjs` merges it with what it reads from the source and writes `docs/generated/`, `llms.txt`, `llms-full.txt`, `docs/COMPONENTS.md`.
- A **new** component (one that does not exist in `hanoryx-web`) goes in the area it belongs to and says so in its doc (`origin: 'new'`).

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` / `npm run build` / `npm run preview` | the docs site |
| `npm run lint` | ESLint over everything |
| `node scripts/generate-barrels.mjs [--check]` | barrels |
| `npm run docs:generate` | manifest, llms.txt, COMPONENTS.md |
| `npm run docs:sizing` | renders every component at 360/768/1200 px and measures it (needs the site running) |
| `npm run check` | lint + barrels current + manifest current + every import resolves |
| `npm run hx -- …` | the `hanoryx` CLI |

## Judgment boundary

Resolve checkable things from the code and a browser. Ask a person only about a public API, naming, or a genuinely subjective visual decision — one question at a time.
