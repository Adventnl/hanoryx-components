/* Renders one catalogue entry live. Returns null for entries with nothing to
   draw on their own (hooks, providers, utilities) — the page then explains why. */
import { Suspense, useEffect, useMemo, useState } from 'react';
import { PageBlock, PageHero, SceneCanvas, Reveal } from 'hanoryx-components';
import { Specimen, SpecContext } from 'hanoryx-components/stage';
import { kit as kitCatalogue } from 'hanoryx-components/content/kit';
import { demoRegistry } from 'hanoryx-components/kit/demos/registry';
import { demos } from './demos';
import { probes } from './probes';
import signatureExamples from '../../../docs/examples/signatures.json';
import closerExamples from '../../../docs/examples/closers.json';
import asideExamples from '../../../docs/examples/asides.json';
import blockExamples from '../../../docs/examples/blocks.json';

const familyLoaders = import.meta.glob('../../../src/specimens/*/index.js');
const familyCache = new Map();
export function loadFamily(slug) {
  if (!familyCache.has(slug)) familyCache.set(slug, familyLoaders[`../../../src/specimens/${slug}/index.js`]());
  return familyCache.get(slug);
}

const kitDemoByName = new Map(kitCatalogue.map((k) => [k.name, k.demo]));
kitDemoByName.set('ToastProvider', 'ToastDemo');
kitDemoByName.set('AvatarGroup', 'AvatarDemo');

const Fallback = ({ h = 160 }) => <div style={{ minHeight: h }} aria-busy="true" />;

/* ---- specimens ---- */
function SpecimenPreview({ entry, data, bare }) {
  const [mod, setMod] = useState(null);
  useEffect(() => { let live = true; loadFamily(entry.family).then((m) => live && setMod(m)); return () => { live = false; }; }, [entry.family]);
  const fam = data.families.find((f) => f.slug === entry.family);
  const Component = mod?.[entry.name];
  if (!Component) return <Fallback />;
  if (bare) return <SpecContext.Provider value><Component /></SpecContext.Provider>;
  const i = mod.items.findIndex(([, C]) => C === Component);
  return (
    <div data-frame={fam.frame} style={{ width: 'min(100%, 28rem)' }}>
      <Specimen no={fam.number} i={Math.max(0, i)} name={entry.label} mode={entry.mode} slug={entry.family}><Component /></Specimen>
    </div>
  );
}

/* ---- kit ---- */
function KitPreview({ entry }) {
  const demo = kitDemoByName.get(entry.parent ?? entry.name);
  const Demo = demo ? demoRegistry[demo] : null;
  if (!Demo) { const P = probes[entry.name]; return P ? <div style={{ width: '100%', maxWidth: 720 }}><P /></div> : null; }
  return <Suspense fallback={<Fallback />}><div style={{ width: '100%', maxWidth: 720 }}><Demo /></div></Suspense>;
}

/* ---- page blocks ---- */
const BLOCK_TYPE = { SplitBlock: 'split', CardsBlock: 'cards', ProcessBlock: 'process', ModulesBlock: 'modules', StatsBlock: 'stats', ManifestoBlock: 'manifesto', CalloutBlock: 'callout', TableBlock: 'table', TimelineBlock: 'timeline', FaqBlock: 'faq', CompareBlock: 'compare', SnippetBlock: 'snippet', TabsBlock: 'tabs', QuoteBlock: 'quote', ChecklistBlock: 'checklist', FactsBlock: 'facts', LinksBlock: 'links', NumbersBlock: 'numbers' };

const SAMPLE_HERO = {
  scene: 'polar-radar', intensity: 'hero', eyebrow: 'Development / Components', code: 'HX.00', status: 'LIVE',
  title: 'The interface, in working parts.',
  intro: 'Every component on the site, with its sizes, its props and its keys.',
  actions: [{ label: 'Browse the kit', to: '/' }, { label: 'Read the sizing guide', to: '/guides/sizing', variant: 'line' }],
};

function BlockPreview({ entry }) {
  if (entry.name === 'PageHero') return <div style={{ width: '100%', height: 560, position: 'relative', overflow: 'hidden', isolation: 'isolate' }}><PageHero hero={SAMPLE_HERO} accent="#ff3333" /></div>;
  const type = BLOCK_TYPE[entry.name];
  const ex = type && blockExamples[type];
  if (!ex) return null;
  return <div style={{ width: '100%', isolation: 'isolate', position: 'relative' }}><PageBlock block={ex.props} accent="#ff3333" /></div>;
}

/* ---- compositions ---- */
function CompositionPreview({ entry }) {
  const used = entry.usedAs?.[0];
  if (!used) return null;
  if (used.via === 'hero.aside') {
    const ex = asideExamples[used.kind];
    if (!ex) return null;
    return <div style={{ width: '100%', minHeight: 560, position: 'relative', isolation: 'isolate' }}><PageHero hero={ex.props.hero} accent="#ff3333" /></div>;
  }
  if (used.via === 'signature block') {
    const ex = signatureExamples[used.kind];
    if (!ex) return null;
    return <div style={{ width: '100%', isolation: 'isolate', position: 'relative' }}><PageBlock block={{ ...ex.props, type: 'signature' }} accent="#ff3333" /></div>;
  }
  const ex = closerExamples[used.kind];
  if (!ex) return null;
  return <div style={{ width: '100%', isolation: 'isolate', position: 'relative' }}><PageBlock block={{ ...ex.props, type: 'closer' }} accent="#ff3333" /></div>;
}

/* ---- scenes & reveal ---- */
function ScenePreview({ entry }) {
  return <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', maxWidth: 840, background: 'var(--c-black)', border: '1px solid var(--c-line)' }}><SceneCanvas scene={entry.name} cost="low" /></div>;
}
function RevealPreview({ entry }) {
  const [n, setN] = useState(0);
  return (
    <div style={{ display: 'grid', gap: '1rem', justifyItems: 'center' }}>
      <Reveal key={n} profile={entry.name} amount={0.1} style={{ padding: '1.2rem 2rem', border: '1px solid var(--c-line-strong)', background: 'var(--c-panel)', font: '500 0.8rem var(--font-mono)', letterSpacing: '0.16em' }}>{entry.name}</Reveal>
      <button type="button" className="sx-btn" onClick={() => setN((v) => v + 1)}>Replay</button>
    </div>
  );
}

/** What this entry cannot show on its own, and where to see it instead. */
export function noPreviewReason(entry) {
  if (entry.area === 'core') return 'Hooks, providers and utilities have no picture of their own — see the props and parameters below, and the source file.';
  if (entry.area === 'shell') return 'Shell pieces fix themselves to the viewport and need the whole site around them. Open the shell preview to see them at work.';
  if (entry.area === 'stage') return 'Stages take over the page scroll. Open a full-page stage preview to see one move.';
  return 'No live example is registered for this entry yet.';
}

export function hasPreviewRoute(entry) {
  return entry.area === 'shell' || entry.area === 'stage';
}

export function Preview({ entry, data, bare = false }) {
  const node = useMemo(() => {
    // Bare pages show the probe: the component alone, nothing around it.
    if (bare && probes[entry.name] && ['kit', 'fx', 'ui'].includes(entry.area)) { const P = probes[entry.name]; return <P />; }
    switch (entry.area) {
      case 'specimens': return <SpecimenPreview entry={entry} data={data} bare={bare} />;
      case 'kit': return <KitPreview entry={entry} />;
      case 'fx': case 'ui': { const D = demos[entry.name]; return D ? <D /> : null; }
      case 'page': return <BlockPreview entry={entry} />;
      case 'signatures': case 'closers': return <CompositionPreview entry={entry} />;
      case 'scenes': return entry.kind === 'scene' ? <ScenePreview entry={entry} /> : null;
      case 'reveal': return entry.kind === 'profile' ? <RevealPreview entry={entry} /> : null;
      default: return null;
    }
  }, [entry, data, bare]);
  if (!node) return null;
  return <Suspense fallback={<Fallback />}>{node}</Suspense>;
}

