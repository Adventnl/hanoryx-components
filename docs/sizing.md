# Sizing, ratios and padding

Measurements describe the rendered example. Parts that need a table, chat or split-panel context are marked as contextual examples; the enclosing example's dimensions are not the isolated part's dimensions. Stateful content can change height after interaction.

This is the page to read before you put two components next to each other. Most broken pages are not broken components — they are components given a size they were never meant to take.

> **The one rule.** A component does not own its outer size. Its *parent* does. Put it in something that has the width you want, and let it fill, cap or hug as it was built to. Never put a `width`, `height` or `padding` on a library component to make it fit.

The numbers on this page come from the CSS (`src/styles/tokens.css`, `layout.css`) and from the sizing run (`npm run docs:sizing`), which renders every component in parents 360, 768 and 1200 px wide and records what its box does. The measured table is in [Measured sizes](#/guides/sizes); each component's own page repeats its row.

---

## 1. The four behaviours

Every component does exactly one of these when its parent changes width. The manifest records which, as `sizing.measured.behavior`.

| Behaviour | What it does | You do |
| --- | --- | --- |
| **fill** | Width follows the parent, edge to edge (fields, cards, tables, alerts, banners, page blocks). | Give it a parent of the width you want. Put several side by side with `Grid` or `Cluster`. |
| **capped** | Follows the parent until a maximum, then stops (`width: min(100%, 28rem)`: `Prose`, `Center`, many specimens). | Centre it, or leave the rest of the row empty. Do not try to stretch it. |
| **intrinsic** | Sizes to its content and ignores the parent (buttons, chips, badges, switches, keycaps). | Lay it out in a row (`Cluster`) or a grid cell with `justify-self: start`. It will not stretch; a button that must be full width goes in a `Stack` with `align-items: stretch`. |
| **fixed** | Has its own dimensions that matter to what it draws (a dial, a ticket, a handset, a gauge). | Leave at least its measured width and height. Smaller parents will clip or scroll. |

A component capped *below* the narrowest parent measured (360 px) is reported as `intrinsic`: for every layout you will build it behaves the same.

Heights are never set from outside, with two exceptions: `AspectRatio` (see §6) and the stages (`min-height: 100svh`).

---

## 2. The page frame

Every page block sits inside `.container`, inside `.section`:

```html
<section class="section">
  <div class="container">…</div>
</section>
```

| Viewport | Gutter (`--gutter`) | Content width | Section padding (`--section-pad`, top and bottom) |
| --- | --- | --- | --- |
| 360 | 20 px | 320 px | 80 px |
| 768 | 38 px | 691 px | 84 px |
| 1280 | 64 px | 1152 px | 141 px |
| 1920 | 80 px | 1200 px | 176 px |

- `.container` is `max-width: var(--maxw)` (**1360 px**, border-box, so the gutters are inside it), centred.
- Use `--section-pad-sm` (48 → 96 px) between related blocks that should read as one thing.
- Long text sits in a column of at most `--maxw-text` (**760 px**) or `.measure` (**62ch**). A line longer than that is a bug.
- The fixed navbar is `--nav-h` = **72 px**; anything that sticks below it uses `top: var(--nav-h)`.
- `scrollbar-gutter: stable` is set on `html`, so locking scroll never shifts the layout.

---

## 3. Spacing

Use the scale. Do not invent `13px`.

| Token | px | Use for |
| --- | --- | --- |
| `--space-1` | 4 | icon-to-label gap, hairline offsets |
| `--space-2` | 8 | gap inside a chip or pill; between a label and its field |
| `--space-3` | 12 | gap between rows inside a component; small card padding |
| `--space-4` | 16 | the default gap between siblings (`Stack`, `Cluster`) |
| `--space-5` | 24 | **card and panel padding**; gap between cards in a `Grid` |
| `--space-6` | 32 | between a section header and its content |
| `--space-8` | 48 | between groups of cards; `--section-pad-sm` floor |
| `--space-10` | 64 | between large blocks inside a section |
| `--space-12` … `-24` | 96 – 192 | section rhythm only (use `.section`, not these) |

**Padding is the component's job, gap is the parent's.** A `Card` has `--space-5` inside; the `Grid` that holds cards has `--space-4`/`--space-5` between them. Never add margin to a library component to space it from a neighbour — put it in a `Stack` (vertical), `Cluster` (wrapping row) or `Grid`.

Do not nest paddings: a `Card` inside a padded `div` inside a `.container` doubles up. If a wrapper needs padding it is probably a `Card`.

---

## 4. Type

Three voices, each with one job.

| Voice | Family | Weight | Used for |
| --- | --- | --- | --- |
| Display / headings | Cormorant Garamond (`--font-serif`) | 300 (400 for h3) | titles, big numbers, quotes |
| Body | Inter (`--font-sans`) | 300 | reading text, UI text |
| System / labels | JetBrains Mono (`--font-mono`) | 400–500, **uppercase, wide tracking** (`--ls-label` .25em) | eyebrows, codes, captions, button labels, data |

Sizes are fluid (`clamp`), so state them as tokens, not pixels. What they come to:

| Token | 360 | 768 | 1280 | 1920 | Role |
| --- | --- | --- | --- | --- | --- |
| `--fs-display` | 41.6 | 65.3 | 108.8 | 136 | one per site, the home hero |
| `--fs-hero` | 38.4 | 46.1 | 76.8 | 88 | page hero titles |
| `--fs-h1` | 32 | 35.3 | 58.9 | 60.8 | |
| `--fs-h2` | 25.6 | 26.1 | 43.5 | 44.8 | section titles |
| `--fs-h3` | 20.8 | 20.8 | 28.2 | 30.4 | card titles |
| `--fs-lead` | 16.8 | 16.8 | 19.2 | 20.8 | the sentence under a title |
| `--fs-body` | 16 | 16 | 16 | 16 | |
| `--fs-sm` | 14 | 14 | 14 | 14 | component body text |
| `--fs-xs` | 12 | 12 | 12 | 12 | captions, footers |
| `--fs-label` | 11.2 | 11.2 | 11.2 | 11.2 | mono labels |
| `--fs-2xs` | 10.4 | 10.4 | 10.4 | 10.4 | button labels, tiny codes |

Line height: `--lh-tight` 1.05 (display), `--lh-snug` 1.25 (headings), `--lh-normal` 1.6 (UI text), `--lh-loose` 1.9 (long reading text).

Text colour is an **opacity ladder on white**, never grey: `--c-text-strong` (100 %) for titles, `--c-text` (80 %) for body, `--c-white-65` for secondary, `--c-text-dim` (50 %) for captions, `--c-text-faint` (30 %) for decoration only. Small text below 65 % fails contrast.

---

## 5. Radii, lines and surfaces

- Borders are **1 px hairlines**: `--c-line` (8 % white) at rest, `--c-line-strong` (12 %) on raised surfaces, `--c-red-dim` on hover/active. Do not use 2 px borders except the accent rail on a `Callout`/`Quote`.
- Radii: `--r-xs` 2 · `--r-sm` 4 · `--r-md` 8 · `--r-lg` 14 · `--r-xl` 22 · `--r-pill`. Inputs and buttons use `sm`/`md`; cards and panels use `lg`; chips and badges use `pill`. Do not mix an `xl` card with `sm` inputs inside it.
- Surfaces stack by lightness, not by shadow: `--c-black` page → `--c-black-2` raised → `--c-black-3`/`--c-panel` panel → `--c-panel-2` hover. One step up per level; never three nested panels.
- Red (`--c-red`) is an accent: **one red thing per screen region** — the current item, the primary action, a status. Large red areas belong only to `Card variant="accent"` and the scenes.

---

## 6. Ratios

Boxes that hold images, video, charts or canvases are shaped, not sized: use `AspectRatio` (`ratio="16 / 9"`) so the room is reserved before the content loads.

| Ratio | Where it is used |
| --- | --- |
| **16 / 9** | media, charts, scene previews, `AspectRatio` default |
| **1 / 1** | avatars, glyph tiles, dials, swatches |
| **4 / 3, 3 / 2** | thumbnails, figure frames |
| **2 / 1** | wide stat tiles, banner art |
| **0.7 – 0.82 (portrait)** | tickets, passes, handset screens |
| golden ≈ **1.62** | brand plates |

Rules: set `ratio` on the box, never `height`; the child fills it (`width: 100%; height: 100%`); a canvas inside takes `position: absolute; inset: 0`.

Specimens are drawn at their natural size inside a *bed* that is at least **9.5rem (152 px)** tall with **0.9rem / 0.4rem** padding (`.sc-bed`). A specimen needs about **16–22 rem** of width; below that, give it a row of its own.

---

## 7. Breakpoints

The CSS is desktop-first (`max-width`). The ones that matter, by how often they are used:

| Query | Meaning |
| --- | --- |
| `max-width: 900px` / `860px` | **the main collapse**: navigation becomes the mobile menu, two-column blocks stack, stages fall back to a flow layout |
| `max-width: 720px` / `640px` / `560px` | phone: grids go to one column, tables scroll sideways, padding tightens |
| `max-width: 1100px` / `1024px` | small desktop: three-column grids become two |
| `min-width: 1360px` | the container stops growing |
| `prefers-reduced-motion: reduce` | present in 186 places: motion off, one still frame |
| `hover: none` | touch: no hover-only content |

Test every page at **360, 768, 1280 and 1920** and with reduced motion on. Nothing may scroll sideways at any of them (the sizing run reports every component that does).

---

## 8. Controls

What the sizing run measured (the full table is [Measured sizes](#/guides/sizes)):

| Control | Height | Notes |
| --- | --- | --- |
| Text inputs, selects, combobox, search, number, password | **39–41 px** control; **60 px** with its label | `fill` — full width of the parent |
| Text area | 106 px control (4 rows); 170 px with label and counter | `fill`, user-resizable vertically |
| Checkbox / radio row, switch row | **38–39 px** row; the drawn box is 19 px | the whole row is the hit area |
| `Button` `md` | **43 px** (padding 13.6 × 24 px, mono label 10.4 px) | `intrinsic` — `sm` is shorter, `lg` taller |
| Tabs, pagination, toolbar items | **38–40 px** | |
| `Chip` | 29 px · `Badge` 21 px | informational; a *clickable* chip is still 29 px tall — keep targets apart |

The kit's controls are **38–43 px** tall, which is just under the 44 px touch target guideline. They are separated by `--space-3` or more and rows are fully clickable, so they hold up; but anything **you** build from scratch should be `min-height: 2.75rem` (44 px) and `min-width: 2.75rem`, and small controls need at least 8 px between them.

Buttons: `sm`, `md` (default), `lg`; the label is mono, `--fs-2xs`, uppercase. Do not set a width on a button; a full-width button is a `Stack` child with `align-items: stretch`.

Form fields **fill** their parent: label above, control, then hint or error. A form is a `Stack` of fields — or a `Grid min="14rem"` when two fields share a row — never a row of fixed-width inputs.

---

## 9. Before you ship a page

1. Every block is `section.section > .container`.
2. No library component has a `width`, `height`, `margin` or `padding` set from outside.
3. Columns come from `Grid min="…"` (or `.grid--3`/`.grid--split`), not from percentages.
4. Text columns are ≤ `--maxw-text`; long copy uses `.measure` and `--lh-loose`.
5. Every image, video and chart sits in an `AspectRatio`.
6. Only tokens appear in your CSS: no hex, no `px` font sizes, no `ms` durations.
7. 360 / 768 / 1280 / 1920, reduced motion on, keyboard only: no sideways scroll, nothing clipped, every control reachable.
