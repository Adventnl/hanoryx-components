/* Hand-written live examples for the pieces that have no demo of their own:
   the foreground toolkit (fx) and the site UI (ui). Each is what you would
   write in an app — props are real, content is sample. */
import { useState } from 'react';
import {
  Accordion, ArrowLink, CompareSlider, DragRail, GlideTabs, Glyph, HoverIndex, KeyCap, Odometer, ProgressRing,
  ProximityText, RichText, ScrambleText, ScrollWords, SpotlightCard, TiltSurface, VelocityMarquee,
  Button, DataPanel, GlitchLine, Pill, SectionHeader, CatalogError,
} from 'hanoryx-components';

const faint = { color: 'var(--c-text-dim)', font: '500 0.7rem var(--font-mono)', letterSpacing: '0.18em', textTransform: 'uppercase' };

function GlideTabsDemo() {
  const [v, setV] = useState('a');
  return <GlideTabs label="Plan" panels={false} value={v} onChange={setV} tabs={[{ id: 'a', label: 'Monthly' }, { id: 'b', label: 'Yearly' }, { id: 'c', label: 'Team' }]} />;
}

function OdometerDemo() {
  const [n, setN] = useState(2491);
  return (
    <div style={{ display: 'grid', gap: '1rem', justifyItems: 'center' }}>
      <div style={{ fontSize: '3.4rem', fontFamily: 'var(--font-mono)', color: 'var(--c-white)' }}><Odometer key={n} value={n} suffix="+" /></div>
      <Button variant="line" size="sm" magnetic={false} onClick={() => setN(1000 + Math.floor(Math.random() * 8999))}>Roll a new number</Button>
    </div>
  );
}

function ScrambleDemo() {
  const [t, setT] = useState(0);
  return (
    <div style={{ display: 'grid', gap: '1rem', justifyItems: 'center' }}>
      <ScrambleText as="p" text="HANORYX / SYSTEMS ONLINE" trigger={t} auto style={{ font: '500 1.1rem var(--font-mono)', letterSpacing: '0.2em' }} />
      <Button variant="line" size="sm" magnetic={false} onClick={() => setT((x) => x + 1)}>Decode again</Button>
    </div>
  );
}

function RingDemo() {
  const [v, setV] = useState(0.62);
  return (
    <div style={{ display: 'grid', gap: '1rem', justifyItems: 'center' }}>
      <ProgressRing value={v} size={120} label="Completion"><b style={{ font: '500 1.4rem var(--font-mono)' }}>{Math.round(v * 100)}%</b></ProgressRing>
      <input type="range" min="0" max="1" step="0.01" value={v} onChange={(e) => setV(Number(e.target.value))} aria-label="Value" style={{ width: 200 }} />
    </div>
  );
}

const ACC = [
  { id: 'one', title: 'Scope', meta: 'S-01', body: 'Say what the system will and will not do before anything is drawn.' },
  { id: 'two', title: 'Model', meta: 'M-02', body: 'The data model comes first; screens are views of it.' },
  { id: 'three', title: 'Build', meta: 'B-03', body: 'Small production-minded steps that survive contact with real operations.' },
];

const INDEX = [
  { id: 'a', title: 'Operational management', kicker: 'SYS.01', detail: 'Scheduling, records and role coordination.', meta: 'Area' },
  { id: 'b', title: 'Commerce infrastructure', kicker: 'SYS.02', detail: 'Transactions, catalogue logic and payments.', meta: 'Area' },
  { id: 'c', title: 'Automation', kicker: 'SYS.03', detail: 'Explicit triggers and inspectable actions.', meta: 'Area' },
];

const card = { padding: '1.4rem', minWidth: 220, display: 'grid', gap: '0.4rem' };

export const demos = {
  /* ---- fx ---- */
  Accordion: () => <div style={{ width: 'min(100%, 520px)' }}><Accordion items={ACC} defaultOpen="one" /></div>,
  ArrowLink: () => <ArrowLink href="#/">Read the principles</ArrowLink>,
  CompareSlider: () => (
    <div style={{ width: 'min(100%, 460px)' }}>
      <CompareSlider
        label="Before and after"
        before={<div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', background: '#14151a', ...faint }}>Before</div>}
        after={<div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', background: 'linear-gradient(135deg,#2a0a0e,#0b0b0d)', ...faint, color: 'var(--c-red)' }}>After</div>}
      />
    </div>
  ),
  DragRail: () => (
    <div style={{ width: 'min(100%, 560px)' }}>
      <DragRail label="Sample cards">
        {Array.from({ length: 7 }, (_, i) => <div key={i} style={{ width: 200, height: 120, display: 'grid', placeItems: 'center', border: '1px solid var(--c-line-strong)', background: 'var(--c-panel)', ...faint }}>Card {i + 1}</div>)}
      </DragRail>
    </div>
  ),
  GlideTabs: GlideTabsDemo,
  Glyph: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.4rem', justifyContent: 'center', maxWidth: 520, color: 'var(--c-white-80)' }}>
      {['orbit', 'layers', 'flow', 'grid', 'shield', 'chart', 'terminal', 'cube', 'wave', 'branch', 'key', 'clock'].map((n) => <Glyph key={n} name={n} size={44} play title={n} />)}
    </div>
  ),
  HoverIndex: () => <div style={{ width: 'min(100%, 640px)' }}><HoverIndex items={INDEX} /></div>,
  KeyCap: () => <div style={{ display: 'flex', gap: '0.5rem' }}><KeyCap>Ctrl</KeyCap><KeyCap>K</KeyCap><KeyCap pressed>Enter</KeyCap></div>,
  Odometer: OdometerDemo,
  ProgressRing: RingDemo,
  ProximityText: () => <ProximityText as="p" text="Interfaces before noise" by="word" style={{ font: '300 2.4rem var(--font-serif)' }} />,
  RichText: () => <p style={{ maxWidth: 520 }}><RichText text="A **bold** claim, some `inline code`, and a {{defined term}} with a hover definition." terms={{ 'defined term': 'A word the page explains where it is used.' }} /></p>,
  ScrambleText: ScrambleDemo,
  ScrollRail: () => <p style={faint}>Mounts on long pages: one tick per section, fixed to the right edge. See Page → PageTemplate.</p>,
  ScrollWords: () => <div style={{ maxWidth: 560 }}><ScrollWords text="Depth is engineered, never improvised. Systems hold weight without leaking it to the surface." style={{ font: '300 1.8rem/1.3 var(--font-serif)' }} /></div>,
  SpotlightCard: () => <SpotlightCard><div style={card}><b style={faint}>Spotlight</b><span>Move the pointer around this card.</span></div></SpotlightCard>,
  TiltSurface: () => (
    <TiltSurface style={{ padding: '2rem 2.4rem', border: '1px solid var(--c-line-strong)', background: 'var(--c-panel)' }}>
      <b data-depth="14" style={faint}>Hover to lean</b>
    </TiltSurface>
  ),
  VelocityMarquee: () => <div style={{ width: '100%', overflow: 'hidden' }}><VelocityMarquee items={['Operational systems', 'Commerce infrastructure', 'Automation', 'Client portals']} itemClassName="" /></div>,

  /* ---- ui ---- */
  Button: () => (
    <div style={{ display: 'grid', gap: '1rem', justifyItems: 'center' }}>
      <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Button variant="primary">Primary</Button><Button variant="ghost">Ghost</Button><Button variant="line">Line</Button><Button variant="outline">Outline</Button>
      </div>
      <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
        <Button size="sm" magnetic={false}>Small</Button><Button size="md" magnetic={false}>Medium</Button><Button size="lg" magnetic={false}>Large</Button>
      </div>
    </div>
  ),
  CatalogError: () => <CatalogError subject="page list" retry={() => {}} />,
  DataPanel: () => <div style={{ width: 'min(100%, 420px)' }}><DataPanel code="SYS.04" label="Internal platforms" interactive><p style={{ padding: '0.6rem 0' }}>Dashboards, administrative controls and workflow actions.</p></DataPanel></div>,
  GlitchLine: () => <div style={{ width: 'min(100%, 480px)' }}><GlitchLine /></div>,
  Pill: () => <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}><Pill>Default</Pill><Pill variant="red">Red</Pill><Pill variant="ghost">Ghost</Pill><Pill dot>Live</Pill></div>,
  SectionHeader: () => <div style={{ width: 'min(100%, 640px)' }}><SectionHeader eyebrow="Development / Components" title="The interface, in working parts." intro="Sixty-one components, each with a live example, its props and its keys." reveal={false} /></div>,
};
