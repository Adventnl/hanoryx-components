export const sampleHero = {
  scene: 'polar-radar', intensity: 'hero', eyebrow: 'Development / Components', code: 'HX.00', status: 'LIVE',
  title: 'The interface, in working parts.',
  intro: 'Every component on the site, with its sizes, its props and its keys.',
  actions: [{ label: 'Browse the kit', to: '/a/kit' }, { label: 'Read the sizing guide', to: '/guides/sizing', variant: 'line' }],
};
export const samplePage = {
  key: 'library-example', title: 'Library example', hero: sampleHero,
  blocks: [{ type: 'callout', anchor: 'example', railLabel: 'Example', title: 'Build from data', heading: 'A reusable page', body: ['The app supplies this data. PageTemplate renders the hero and blocks.'] }],
};
const pagePromise = Promise.resolve(samplePage);
const missingPromise = Promise.resolve(null);
export const loadSamplePage = (key) => key === samplePage.key ? pagePromise : missingPromise;
