# Getting started

`hanoryx-components` is the Hanoryx Systems interface, taken out of the website and organised so any site can be built from it without writing a new component: **2,822 catalogued pieces** — the interface kit, the foreground toolkit, page blocks, the site shell, 67 canvas scenes, 176 compositions and 2,091 stand-alone specimens.

It is a **source library**: React 19 + CSS Modules, published as source, built by *your* bundler (Vite). Nothing is pre-compiled.

## 1. Install

```bash
npm install github:Adventnl/hanoryx-components
# peer dependencies (the library does not bundle them)
npm install react react-dom react-router-dom gsap @gsap/react motion lenis lucide-react clsx
```

Vite needs to treat the package as source, not as a pre-built dependency:

```js
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: { exclude: ['hanoryx-components'] },
  resolve: { dedupe: ['react', 'react-dom', 'react-router-dom'] },
});
```

## 2. Wire it once

```jsx
// main.jsx
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HanoryxProvider, SiteShell } from 'hanoryx-components';
import 'hanoryx-components/styles';          // tokens, reset, type, layout — once

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <HanoryxProvider>
      <SiteShell>{/* your routes */}</SiteShell>
    </HanoryxProvider>
  </BrowserRouter>
);
```

- A **router** must be above everything (`BrowserRouter`, `HashRouter`, `MemoryRouter`): links, the navbar and smooth scroll read it.
- `HanoryxProvider` mounts the animation environment (GSAP plugins), ambient audio, smooth scroll (Lenis) and the full-screen "experience" overlay, and starts the pointer tracker and fast-scroll governor. For docs, tools and embeds use `<HanoryxProvider smoothScroll={false} audio={false} experience={false}>`.
- `SiteShell` is the frame: skip link, navbar, mobile menu, footer, search (`Ctrl/⌘ K`), shortcuts (`?`), cursor, route transitions, boot intro. Leave it out for an embedded widget.
- Fonts (Cormorant Garamond, Inter, JetBrains Mono) come from Google Fonts through `typography.css`. Self-host them if you cannot call Google.

## 3. Tell it where your data is

Components that need data they do not own ask for it through registered sources:

```js
import { configureSite, configureAssets } from 'hanoryx-components/core';

// React use() requires the same promise for a page key across renders.
const pages = new Map();
const loadPage = (key) => {
  if (!pages.has(key)) pages.set(key, import(`./data/pages/${key.replace(/\//g, '-')}.js`).then((m) => m.default));
  return pages.get(key);
};

configureSite({
  loadPage,                                                                                  // for <TemplatePage routeKey="…">
  loadPageCatalog: () => fetch('/pageCatalog.json').then((r) => r.json()),                       // titles + intros, for listings
  loadSearchDocuments: () => fetch('/searchDocuments.json').then((r) => r.json()),               // full text, for Ctrl-K search
});

configureAssets({ musicSrc: '/intro.mp3' });   // optional: the ambient track (none is shipped)
```

## 4. Build a page

**From data** (the way the Hanoryx site is built — a page is a plain object):

```jsx
import { PageTemplate } from 'hanoryx-components';

<PageTemplate data={{
  key: 'systems', title: 'Systems', accent: '#ff3333',
  hero: { scene: 'polar-radar', eyebrow: 'Systems', title: 'Operational platforms.', intro: 'What we build, and how it is run.' },
  blocks: [
    { type: 'cards', anchor: 'areas', railLabel: 'Areas', title: 'Where we build', items: [/* … */] },
    { type: 'closer', kind: 'receipt', tag: 'End of systems', title: 'That is the lot.' },
  ],
}} />
```

Block types: `split`, `cards`, `process`, `modules`, `stats`, `manifesto`, `signature`, `closer`, plus the data-first `callout`, `table`, `timeline`, `faq`, `compare`, `snippet`, `tabs`, `quote`, `checklist`, `facts`, `links`, `numbers`. See *Page* in the library for the data each takes.

**By hand**, from the kit:

```jsx
import { Grid, Stat, Card, DataTable } from 'hanoryx-components';

<section className="section">
  <div className="container">
    <Grid min="14rem" gap={4}>
      <Stat label="Open orders" value="128" change={4} changeLabel="vs. last week" />
      <Stat label="On time" value="96" unit="%" />
    </Grid>
  </div>
</section>
```

## 5. Where things are

| You want | Import from | Look in |
| --- | --- | --- |
| a form field, table, dialog, tabs… | `hanoryx-components/kit` | `src/kit/<family>/` |
| tilt, spotlight, odometer, marquee, glyphs | `hanoryx-components/fx` | `src/fx/` |
| the site's button, pill, panel, section header | `hanoryx-components/ui` | `src/ui/` |
| hero, page blocks, the page template | `hanoryx-components/page` | `src/page/` |
| navbar, footer, search, shortcuts, cursor | `hanoryx-components/shell` | `src/shell/<family>/` |
| entrance animation, kinetic text | `hanoryx-components/reveal` | `src/reveal/` |
| canvas backgrounds | `hanoryx-components/scenes` | `src/scenes/` |
| an interactive composition for a page | `hanoryx-components/signatures` | `src/signatures/` |
| a page ending | `hanoryx-components/closers` | `src/closers/` |
| any of the 2,091 stand-alone pieces | `hanoryx-components/specimens/<family>` | `src/specimens/<family>/` |
| hooks, providers, utilities | `hanoryx-components/core` | `src/core/` |

Every component has a page on the docs site with a live example, its props and its measured size; the same data is in `docs/generated/manifest.json` and, for the terminal, `npm run hx -- component <Name>`.
