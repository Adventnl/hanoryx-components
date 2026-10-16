# Principles

What makes a page look like Hanoryx — and what breaks it. These are read off the code, not invented: every rule is something a token, a component or a test already enforces.

## The look

- **Deep black, white type, one red.** Surfaces step from `--c-black` up through `--c-black-2`, `--c-panel` and `--c-panel-2`. Text is white at a set of opacities (100 / 80 / 65 / 50 %). Red (`--c-red`) marks *the* current thing: one primary action, the active item, a status. If two red things compete on a screen, one is wrong.
- **Three voices.** A light serif (Cormorant Garamond) for headings and big numbers; Inter 300 for reading; JetBrains Mono, uppercase and widely tracked, for labels, codes, captions and data. A label that is not mono-uppercase looks borrowed from another site.
- **Hairlines, not boxes.** 1 px lines at 8–12 % white; shadows only to lift overlays. Hover/active turns a line red-dim.
- **Small radii.** 4–8 px for controls, 14 px for panels, pill for chips. Never a large radius on a small control.
- **Every page has its own object.** A canvas scene behind it, and a *foreground* composition in front: an interactive diagram, a tool, a playful control. Pages end on a composition of their own (a closer) — never on a "contact us" banner.

## The structure

Three levels of foreground, from small to large:

| Level | What it is | Where |
| --- | --- | --- |
| **toolkit** | small, content-free effects: tilt, spotlight, scramble, odometer, marquee, glyph | `fx` |
| **hero aside / signature** | one interactive composition: an explorer, a matrix, a builder, a map | `signatures` |
| **closer** | the last block of a page: a receipt, a card that turns, a calculator | `closers` |

Pages are **data**: `{ key, title, accent, hero, blocks }`. The same data feeds the site search, so what a page says is what can be found. Blocks are a fixed vocabulary; a page chooses and orders them.

## The motion rules (learned by measuring)

- **Transform and opacity only.** Never animate or leave behind `filter`/`backdrop-filter` on a large element; never put `mask-image` over an animating canvas.
- **No infinite full-screen loops.** A moving overlay that covers the screen cost ~15 fps. Static overlays are cheap; moving ones are not.
- **Loops run only while on screen** (`useOnScreen`, `useLive`), and **never** under `prefers-reduced-motion` (one settled frame instead).
- **Pointer effects write CSS variables** (`usePointerField`, `@property` so CSS eases them), not React state.
- **One scheduler.** A single `requestAnimationFrame` loop serves every scene (`core/motion/rafScheduler`); only the two most visible scenes animate (one on phones).
- **Scroll-linked motion is JS → CSS variables once per frame**, and CSS does the rest: stages publish `--p`, `--pin`, `--f`, `--y`; nothing re-renders while it moves.

## The accessibility rules

- Every control is keyboard-operable and has a text name (`aria-label` or visible label). Specimens included.
- Tone is never colour alone: every state has a word or an icon.
- Dialogs trap focus and give it back; Escape closes everything; focus is visible.
- Page changes are announced (`RouteAnnouncer`) and focus moves to `main`.
- Single-key shortcuts (`?`, `B`, `/`) can be switched off; `Ctrl/⌘ K` stays.
- Contrast: every text colour is at least 4.5 : 1 as painted (3 : 1 if large). Text at 50 % white is for non-essential captions only.

## What to avoid

- Raw colours, pixel font sizes or millisecond durations in your CSS — use the tokens.
- Setting a width, height, margin or padding on a library component (see [Sizing](#/guides/sizing)).
- A third panel nested inside two panels; a red wash behind body text.
- Auto-playing sound. Audio starts only from a user gesture.
- Components that need hover to be understood: touch has no hover.
