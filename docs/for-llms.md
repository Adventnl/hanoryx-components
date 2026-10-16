# Building with an LLM

This library is meant to be handed to a model. Models fail with component libraries in three ways: they **invent** components that do not exist, they **guess** sizes and padding, and they **forget** the setup. The library is organised to stop all three.

## Give the model this, in this order

1. **`AGENTS.md`** (repo root) — the rules, in one page. Tell the model to read it first.
2. **`llms.txt`** — the map: every area, every kit/fx/ui/page/shell component with a one-line summary, every specimen family. ~10 KB.
3. **`docs/sizing.md`** and **`docs/layout-recipes.md`** — sizes, ratios, padding and ten page skeletons. The part models get wrong without it.
4. A component's own entry, on demand: `npm run hx -- component <Name> --dense` (props, measured size, keys, one example), or its page on the docs site.

`llms-full.txt` is the same catalogue with every prop; `docs/generated/manifest.json` is the machine-readable version of everything (entries, props, measured sizes, import lines).

## The prompt that works

> Build the page with `hanoryx-components` only. Read `AGENTS.md` and `docs/sizing.md` first. Use `npm run hx -- search <word>` to find a component before writing one, and `npm run hx -- component <Name> --dense` before using it. Do not write a new component, do not set width/height/margin/padding on library components, use only tokens in CSS, and finish by running the page at 360, 768, 1280 and 1920 px.

## The rules a model must follow

1. **Never invent a component.** If it is not in `llms.txt`, `hx search` it. If it is still not there, compose it from what is (`Stack`, `Grid`, `Cluster`, `Card`, `DataPanel`) — do not write markup that imitates one.
2. **Import from the area**, never deep: `import { TextField } from 'hanoryx-components/kit'`. A specimen is `import { Rocker } from 'hanoryx-components/specimens/switchboard'`.
3. **Size from the parent.** A component's behaviour (`fill`, `capped`, `intrinsic`, `fixed`) is in its entry. Give `fill` and `capped` components a parent with the width you want; never set `width`/`height` on the component. See [Sizing](#/guides/sizing).
4. **Space with layout components.** Gap between things is `Stack`, `Cluster` or `Grid`'s `gap` (a number 1–8 → `--space-N`); padding is the component's own. No margins on library components.
5. **Tokens only.** `var(--space-5)`, `var(--c-white-65)`, `var(--r-md)`, `var(--font-mono)`. No hex, no `px` font sizes, no `ms`. The full list is `docs/tokens.md`.
6. **Pages are `section.section > .container`.** Text columns ≤ `--maxw-text`. Media in `AspectRatio`.
7. **One red thing per region.** Red is the primary action, the current item or a status — not decoration.
8. **Every control has a name and a keyboard path.** The kit does it; do not rebuild controls from `div`s.
9. **Router, provider, styles.** A router above everything, `HanoryxProvider` below it, `import 'hanoryx-components/styles'` once.
10. **Check it.** Render at 360, 768, 1280 and 1920 with reduced motion on; no sideways scroll; nothing clipped.

## Things models get wrong (and the fix)

| Mistake | Fix |
| --- | --- |
| `<TextField style={{ width: 300 }} />` | Put it in a parent that is 300 px (or `Grid min="18rem"`); fields fill. |
| A row of `Button`s with `margin-right` | `<Cluster gap={3}>…</Cluster>` |
| Centring a `Card` with `margin: auto` and a fixed width | `<div className="container">`, or `Grid` with `justify-items: center` for a capped component |
| Grey text (`#888`) | `var(--c-white-50)` — the ladder is opacities of white |
| A second red button next to the first | The second is `variant="line"` or `"ghost"` |
| Using a specimen as the real thing | Specimens are drawn at their natural size and are demonstrations; for a form use the kit |
| Hover-only information | Provide the same on focus/tap (see `HoverCard`: it must only *add*) |
| Forgetting reduced motion | Use `Reveal`, scenes and fx components — they respect it. Raw CSS animation needs `@media (prefers-reduced-motion: reduce)` |
| `import { Dialog } from 'hanoryx-components/kit/overlays/Dialog'` | `from 'hanoryx-components/kit'` |

## Finding things

```bash
npm run hx -- areas                         # the twelve areas
npm run hx -- list kit inputs               # names + summaries
npm run hx -- search toggle                 # Switch, Chip, Rocker, Pill…
npm run hx -- component DataTable --dense   # import, props, measured size, one example
npm run hx -- family dials                  # all 40 specimens in a family, with sizes
npm run hx -- sizing Card                   # only the measured sizes
npm run hx -- docs sizing                   # print a guide
```

## What is real and what is a demonstration

- **kit, fx, ui, page, shell, reveal, scenes, signatures, closers, stage, core** are the building blocks.
- **specimens** are 2,091 stand-alone pieces that each *do one thing well at one size*: switches, gauges, tickers, tickets. Use them as finished objects (a gauge, a flip clock) or as a reference for how something is made. They are not a form kit.
- **signatures** take data in the shape page blocks use (`{ type: 'signature', kind, …props }`); every signature page shows a real example. **closers** end pages and take `{ type: 'closer', kind, tag, title, lede, onward }`.
