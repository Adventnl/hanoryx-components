# Layout recipes

Six pages, built only from the library. Each one is a real file in `site/src/recipes/`, shown live at four viewport widths on the docs site (each is rendered in an `<iframe>` so its media queries answer to the width you choose). Copy the file, change the words.

| Recipe | What it is | The sizing idea it teaches |
| --- | --- | --- |
| [Landing page](#/recipes/landing) | hero + split + cards + stats + closer, **as data** | you write no layout: every block is `section.section > .container` |
| [Reading page](#/recipes/article) | side nav · prose · contents | a text column capped at `--maxw-text` (760 px) with two collapsing rails |
| [Dashboard](#/recipes/dashboard) | alert, four figures, table, charts | `Grid min="13rem"` is the whole responsive system |
| [Form](#/recipes/form) | settings form in one card | fields **fill**; the form's width is the design (36 rem) |
| [Card grid](#/recipes/cards) | section header + plan cards | equal-height cards from `Grid min="16rem"`, one accent card |
| [Specimen sheet](#/recipes/specimens) | stand-alone pieces on a grid | pieces keep their own size inside a bed ≥ 17 rem |

## The skeleton every page shares

```jsx
<main id="main">
  <section className="section">                  {/* vertical rhythm: 80–176px */}
    <div className="container">                  {/* max 1360px, gutters 20–80px */}
      <Stack gap={8}>                            {/* gap between groups: --space-8 */}
        <SectionHeader eyebrow="…" title="…" />
        <Grid min="16rem" gap={5}>…</Grid>      {/* columns: as many as fit */}
      </Stack>
    </div>
  </section>
</main>
```

- **Rhythm** comes from `.section` (between blocks) and `Stack gap` (inside one). Never from margins on components.
- **Columns** come from `Grid min`: pick the narrowest a cell can be (`13rem` for a figure, `16rem` for a card, `28rem` for a table, `17.5rem` for a specimen). There is no breakpoint.
- **Width of text** is `Prose` (≤ 760 px) or `.measure` (62 ch). A heading and its lede (`SectionHeader`) cap themselves.
- **Rows of controls** are `Cluster`; **columns of anything** are `Stack`.
- **Overlays** (`Dialog`, `Drawer`, `Popover`, `Tooltip`, `HoverCard`, `ToastProvider`) are portalled: they need no space in the layout.

## Numbers to design to

| What | Size |
| --- | --- |
| Page container | max **1360 px**, gutter **20 / 38 / 64 / 80 px** at 360 / 768 / 1280 / 1920 |
| Section padding | **80 → 176 px** (`--section-pad`), **48 → 96 px** (`--section-pad-sm`) |
| Reading column | **760 px** (`--maxw-text`), 62 ch |
| Card padding / gap between cards | **24 px** (`--space-5`) / **16–24 px** |
| Navbar | **72 px** |
| Touch target | **≥ 44 px** |
| Smallest column in a `Grid` | figure 13 rem (208) · card 16 rem (256) · specimen 17.5 rem (280) · table 28 rem (448) |
| Phone width to check | **360 px** (and 390) |

## The data-driven page

The Hanoryx site writes pages as data (`recipes/landing`). A page object is `{ key, title, accent, hero, blocks }`; the vocabulary of blocks is closed:

| Block | Takes |
| --- | --- |
| `split` | `eyebrow, title, body[], points[{k,v}], asideLabel` |
| `cards` | `variant ('grid'\|'rail'\|'bento'), items[{code,title,body,glyph,to,tags,status}]` |
| `process` | `steps[{step,title,body}]` |
| `modules` | `rows[{k,v}]` |
| `stats` | `items[{value,label,note}]` |
| `manifesto` | `lines[], marquee[]` |
| `signature` | `kind` + the composition's props (see **Signatures**) |
| `closer` | `kind, tag, title, lede, onward[{label,to}]` (see **Closers**) |
| `callout, table, timeline, faq, compare, snippet, tabs, quote, checklist, facts, links, numbers` | data-first blocks built from the kit |

Every block also reads `anchor` and `railLabel` (for the scroll rail), `scene` and `intensity` (the canvas behind it), and `eyebrow / title / intro`. `docs/examples/*.json` has a real, working example of every block, signature, closer and hero aside.
