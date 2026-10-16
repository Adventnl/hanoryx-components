/* RECIPE · Landing page, from data.
   A Hanoryx page is a plain object. PageTemplate draws the hero, then each block
   in order; every block brings its own section, container and padding — you add none.
   Sizes: hero = 100svh stage; each block = .section (80–176px) > .container (max 1360px). */
import { PageTemplate } from 'hanoryx-components';

export const meta = {
  title: 'Landing page',
  summary: 'Hero, a two-column explainer, a card grid, figures and an ending — as data.',
  uses: ['PageTemplate', 'hero', 'split', 'cards', 'stats', 'closer'],
  notes: [
    'You write no layout. Every block already is `section.section > .container`, so widths, gutters and vertical rhythm are the library\'s.',
    'Order is the design: hero → one idea per block → a closer. No block nests another.',
    '`scene` picks the canvas behind a block; text-dense blocks should use a calm scene (`topographic-lines`, `privacy-quiet-grid`, `architectural-grid`).',
    'Give blocks `anchor` + `railLabel` and the page gets a scroll rail for free.',
  ],
};

const data = {
  key: 'recipes/landing',
  title: 'Operational platforms',
  accent: '#ff3333',
  hero: {
    scene: 'polar-radar', intensity: 'hero', eyebrow: 'Platforms', code: 'HX.01', status: 'LIVE',
    title: 'Systems that hold weight without leaking it to the surface.',
    intro: 'Scheduling, records and role coordination, built as one connected model.',
  },
  blocks: [
    {
      type: 'split', anchor: 'approach', railLabel: 'Approach', scene: 'topographic-lines',
      eyebrow: 'Approach', code: 'APP.01', title: 'Controlled complexity.',
      body: ['Depth is engineered, never improvised. A surface should resolve intent in a single read.', 'Everything that does not serve clarity is removed.'],
      asideLabel: 'PRINCIPLES', asideCode: 'APP.NOTES',
      points: [{ k: 'MODEL', v: 'Data first, screens second' }, { k: 'ACCESS', v: 'Scoped by role' }, { k: 'CHANGE', v: 'Built to expand' }],
    },
    {
      type: 'cards', variant: 'grid', anchor: 'areas', railLabel: 'Areas', eyebrow: 'Areas', title: 'Where we build.',
      items: [
        { code: 'A.01', title: 'Operations', body: 'Scheduling, communication, records.', glyph: 'calendar' },
        { code: 'A.02', title: 'Commerce', body: 'Transactions and catalogue logic.', glyph: 'cart' },
        { code: 'A.03', title: 'Automation', body: 'Explicit triggers, inspectable actions.', glyph: 'flow' },
      ],
    },
    {
      type: 'stats', anchor: 'figures', railLabel: 'Figures', eyebrow: 'At a glance', title: 'What is here.',
      items: [{ value: 7, label: 'Areas', note: 'Where we build' }, { value: 6, label: 'Principles', note: 'How we decide' }, { value: 3, label: 'Disciplines', note: 'Architecture · interface · motion' }],
    },
    { type: 'closer', kind: 'receipt', scene: 'privacy-quiet-grid', tag: 'End of platforms', minHeight: 520, title: 'That is the page.', lede: 'Every page ends on an object of its own, never on a banner.' },
  ],
};

export default function Landing() {
  return <PageTemplate data={data} />;
}
