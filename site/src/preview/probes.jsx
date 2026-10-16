/* Probes: each component on its own, with the smallest usage that makes sense
   and no wrapper around it. The sizing script renders these in parents of
   several widths and records what the component's own box does — so what a
   page says about "how wide is a TextField" is measured, not guessed.

   The `code` next to a probe is what the docs show as its first example. */
import { useState } from 'react';
import {
  Field, TextField, TextArea, NumberField, SearchField, PasswordField, SelectField, Combobox, Checkbox, RadioGroup, Switch, RangeField, Segmented, TagInput, FileDrop,
  Breadcrumbs, Pagination, Stepper, Tabs, SideNav, DropdownMenu, OnThisPage, Toolbar,
  Alert, ToastProvider, Banner, ProgressBar, Meter, Spinner, Skeleton, EmptyState, StatusDot,
  Badge, Chip, Avatar, AvatarGroup, Stat, DataTable, DescriptionList, Timeline, Tree, CodeBlock, Sparkline, BarList,
  Tooltip, Popover, HoverCard, Dialog, Drawer, ConfirmDialog,
  Card, Callout, Quote, Figure, Divider, Prose, Stack, Cluster, Grid, Disclosure, AspectRatio, VisuallyHidden, Section, Container, Center, Heading, Text,
  Accordion, ArrowLink, CompareSlider, DragRail, GlideTabs, Glyph, HoverIndex, KeyCap, Odometer, ProgressRing, ProximityText, RichText, ScrambleText, ScrollWords, SpotlightCard, TiltSurface, VelocityMarquee,
  Button, DataPanel, GlitchLine, Pill, SectionHeader, CatalogError,
} from 'hanoryx-components';

const noop = () => {};
const ZONES = ['UTC', 'Europe/London', 'Europe/Paris', 'America/New_York', 'America/Los_Angeles', 'Asia/Tokyo'];
const ROWS = [{ id: 1, job: 'Nightly export', mins: 12 }, { id: 2, job: 'Invoice run', mins: 34 }, { id: 3, job: 'Backup', mins: 8 }];
const COLS = [{ key: 'job', label: 'Job', sortable: true }, { key: 'mins', label: 'Minutes', sortable: true, align: 'right' }];

function Controlled({ init, children }) {
  const [v, setV] = useState(init);
  return children(v, setV);
}

export const probes = {
  /* ---- kit / inputs ---- */
  Field: () => <Field label="Email" hint="We reply from this address.">{(p) => <input {...p} type="email" />}</Field>,
  TextField: () => <TextField label="Budget" prefix="$" suffix="per month" inputMode="numeric" defaultValue="1200" />,
  TextArea: () => <TextArea label="Describe the change" maxLength={140} hint="Two sentences is plenty." />,
  NumberField: () => <NumberField label="Seats" min={1} max={12} defaultValue={4} />,
  SearchField: () => <SearchField label="Find a term" />,
  PasswordField: () => <PasswordField label="New password" hint="At least 12 characters is a good start." />,
  SelectField: () => <SelectField label="Environment" options={['Development', 'Staging', 'Production']} />,
  Combobox: () => <Combobox label="Time zone" options={ZONES} />,
  Checkbox: () => <Checkbox label="Send the weekly summary" hint="Mondays, 09:00." />,
  RadioGroup: () => <RadioGroup legend="Support level" defaultValue="self" options={[{ value: 'self', label: 'Self-serve' }, { value: 'team', label: 'Team', hint: 'A named contact.' }]} />,
  Switch: () => <Switch label="Email me when a deploy fails" defaultChecked />,
  RangeField: () => <RangeField label="Duration" min={0} max={1000} step={20} defaultValue={400} format={(n) => `${n} ms`} />,
  Segmented: () => <Segmented label="Range" options={['Day', 'Week', 'Month']} defaultValue="Week" />,
  TagInput: () => <TagInput label="Topics" defaultValue={['ops', 'security']} max={6} />,
  FileDrop: () => <FileDrop label="Choose files" accept=".csv" onFiles={noop} />,
  /* navigation */
  Breadcrumbs: () => <Breadcrumbs items={[{ label: 'Resources', to: '/' }, { label: 'Glossary' }]} />,
  Pagination: () => <Controlled init={3}>{(page, setPage) => <Pagination page={page} pages={20} onChange={setPage} />}</Controlled>,
  Stepper: () => <Stepper current={1} steps={[{ title: 'Details' }, { title: 'Review' }, { title: 'Confirm' }]} />,
  Tabs: () => <Tabs label="About the service" tabs={[{ id: 'what', label: 'What it does', content: <p>A short description of the service.</p> }, { id: 'run', label: 'Running it', content: <p>How it is operated.</p> }]} />,
  SideNav: () => <SideNav current="/a" groups={[{ label: 'Reliability', open: true, items: [{ label: 'Runbooks', to: '/a' }, { label: 'Triggers', to: '/b' }] }]} />,
  DropdownMenu: () => <DropdownMenu label="Actions" items={[{ label: 'Rename', onSelect: noop }, { separator: true }, { label: 'Delete…', onSelect: noop, danger: true }]} />,
  OnThisPage: () => <OnThisPage items={[{ id: 'intro', label: 'Introduction' }, { id: 'steps', label: 'Steps' }]} />,
  Toolbar: () => <Toolbar label="Text formatting" items={[{ id: 'b', label: 'Bold', toggle: true }, { id: 'i', label: 'Italic', toggle: true }, { id: 'u', label: 'Underline' }]} />,
  /* feedback */
  Alert: () => <Alert tone="warning" title="Token expires soon">Replace it before Friday.</Alert>,
  ToastProvider: () => <ToastProvider><p>Toasts appear in a corner of the viewport.</p></ToastProvider>,
  Banner: () => <Banner title="New:" action={{ label: 'Read the notes', to: '/' }}>A chapter was added to the release notes.</Banner>,
  ProgressBar: () => <ProgressBar label="Importing rows" value={42} />,
  Meter: () => <Meter label="Storage used" value={62} unit="%" low={10} high={85} />,
  Spinner: () => <Spinner label="Saving" />,
  Skeleton: () => <Skeleton lines={3} />,
  EmptyState: () => <EmptyState title="Nothing scheduled">When a job is scheduled it appears here.</EmptyState>,
  StatusDot: () => <StatusDot state="warn" label="Slow responses" />,
  /* data */
  Badge: () => <Badge tone="success" dot>Healthy</Badge>,
  Chip: () => <Chip selected>Operations</Chip>,
  Avatar: () => <Avatar name="Alex Example" />,
  AvatarGroup: () => <AvatarGroup names={['Alex Example', 'Sam Sample', 'Rin Placeholder', 'Kit Demo']} max={3} />,
  Stat: () => <Stat label="Jobs on time" value="96" unit="%" change={2} changeLabel="vs. last week" />,
  DataTable: () => <DataTable caption="Scheduled jobs" rows={ROWS} columns={COLS} />,
  DescriptionList: () => <DescriptionList items={[{ term: 'Service', detail: 'Order intake' }, { term: 'Owner', detail: 'Commerce team' }]} />,
  Timeline: () => <Timeline items={[{ when: 'Phase one', title: 'Shape', body: 'Work out the problem.', done: true }, { when: 'Phase two', title: 'Build' }]} />,
  Tree: () => <Tree label="Project files" defaultOpen={['src']} nodes={[{ id: 'src', label: 'src', children: [{ id: 'main', label: 'main.jsx' }, { id: 'app', label: 'App.jsx' }] }, { id: 'pkg', label: 'package.json' }]} />,
  CodeBlock: () => <CodeBlock filename="retry.js" lines code={'async function retry(fn, n = 3) {\n  for (let i = 0; i < n; i += 1) {\n    try { return await fn(); } catch (e) { if (i === n - 1) throw e; }\n  }\n}'} />,
  Sparkline: () => <Sparkline label="Response time" unit=" ms" data={[210, 190, 205, 180, 150, 140]} />,
  BarList: () => <BarList label="Jobs by owner" items={[{ label: 'Operations', value: 12 }, { label: 'Platform', value: 8 }, { label: 'Data', value: 5 }]} />,
  /* overlays */
  Tooltip: () => <Tooltip text="Copy a link"><button type="button" className="sx-btn">Hover me</button></Tooltip>,
  Popover: () => <Popover label="Share" title="Share this view"><p>Anyone with the link can read it.</p></Popover>,
  HoverCard: () => <HoverCard title="Glossary" body="Every term the site uses, defined once."><a href="#/">glossary</a></HoverCard>,
  Dialog: () => <Dialog open onClose={noop} title="Rename"><p>Choose a new name.</p></Dialog>,
  Drawer: () => <Drawer open onClose={noop} title="Filters" side="right"><p>Filter controls go here.</p></Drawer>,
  ConfirmDialog: () => <ConfirmDialog open title="Delete this draft?" confirmLabel="Delete the draft" cancelLabel="Keep it" danger onConfirm={noop} onCancel={noop}>It cannot be recovered.</ConfirmDialog>,
  /* content & layout */
  Card: () => <Card eyebrow="Accent" title="Pick one" variant="accent" footer="Once per screen.">The red wash says start here.</Card>,
  Callout: () => <Callout tone="warning">Changing the retention period applies to new records only.</Callout>,
  Quote: () => <Quote cite="From this company’s principles">A system that is hard to hand over is hard to trust.</Quote>,
  Figure: () => <Figure caption="Figure 1. Three plates."><svg role="img" aria-label="Three stacked plates" viewBox="0 0 160 90" width="100%"><rect x="10" y="10" width="140" height="18" fill="none" stroke="currentColor" /><rect x="10" y="36" width="140" height="18" fill="none" stroke="currentColor" /><rect x="10" y="62" width="140" height="18" fill="none" stroke="currentColor" /></svg></Figure>,
  Divider: () => <Divider>or</Divider>,
  Prose: () => <Prose><h2>Handing a system over</h2><p>A handover is a short document and a shorter conversation.</p><ul><li>What it does</li><li>How it fails</li></ul></Prose>,
  Stack: () => <Stack gap={4}><Chip>One</Chip><Chip>Two</Chip><Chip>Three</Chip></Stack>,
  Cluster: () => <Cluster gap={3}><Chip>Operations</Chip><Chip>Security</Chip><Chip>Platform</Chip></Cluster>,
  Grid: () => <Grid min="9rem" gap={4}>{[1, 2, 3, 4, 5, 6].map((n) => <Card key={n} title={`Card ${n}`} />)}</Grid>,
  Disclosure: () => <Disclosure title="What does idempotent mean?" defaultOpen>Doing it twice has the same effect as once.</Disclosure>,
  AspectRatio: () => <AspectRatio ratio="16 / 9"><div style={{ width: '100%', height: '100%', background: 'var(--c-panel)' }} /></AspectRatio>,
  VisuallyHidden: () => <button type="button"><span aria-hidden="true">×</span><VisuallyHidden>Close the panel</VisuallyHidden></button>,

  Section: () => <Section><Container><Text>A page block with the section rhythm.</Text></Container></Section>,
  Container: () => <Container><Text>The page width, with its gutters.</Text></Container>,
  Center: () => <Center max="24rem"><Card title="Centred">A capped column.</Card></Center>,
  Heading: () => <Heading level={2}>Where we build.</Heading>,
  Text: () => <Text variant="lead" measure>The sentence that sits under a title.</Text>,

  /* ---- fx ---- */
  Accordion: () => <Accordion items={[{ id: 'a', title: 'Scope', meta: 'S-01', body: 'Say what the system will do.' }, { id: 'b', title: 'Model', meta: 'M-02', body: 'The data model comes first.' }]} />,
  ArrowLink: () => <ArrowLink href="#/">Read the principles</ArrowLink>,
  CompareSlider: () => <CompareSlider label="Before and after" before={<div style={{ position: 'absolute', inset: 0, background: '#14151a' }} />} after={<div style={{ position: 'absolute', inset: 0, background: '#2a0a0e' }} />} />,
  DragRail: () => <DragRail label="Cards">{[1, 2, 3, 4, 5, 6].map((n) => <div key={n} style={{ width: 200, height: 120, border: '1px solid var(--c-line-strong)' }} />)}</DragRail>,
  GlideTabs: () => <GlideTabs label="Plan" panels={false} value="a" onChange={noop} tabs={[{ id: 'a', label: 'Monthly' }, { id: 'b', label: 'Yearly' }]} />,
  Glyph: () => <Glyph name="layers" size={44} title="layers" />,
  HoverIndex: () => <HoverIndex items={[{ id: 'a', title: 'Operational management', kicker: 'SYS.01', detail: 'Scheduling and records.', meta: 'Area' }, { id: 'b', title: 'Automation', kicker: 'SYS.03', detail: 'Explicit triggers.', meta: 'Area' }]} />,
  KeyCap: () => <KeyCap>K</KeyCap>,
  Odometer: () => <Odometer value={2491} />,
  ProgressRing: () => <ProgressRing value={0.62} size={96} label="Completion" />,
  ProximityText: () => <ProximityText as="p" text="Interfaces before noise" />,
  RichText: () => <RichText text="A **bold** claim and `inline code`." />,
  ScrambleText: () => <ScrambleText text="HANORYX / SYSTEMS ONLINE" />,
  ScrollWords: () => <ScrollWords text="Depth is engineered, never improvised." />,
  SpotlightCard: () => <SpotlightCard><div style={{ padding: '1.4rem' }}>Move the pointer around this card.</div></SpotlightCard>,
  TiltSurface: () => <TiltSurface style={{ padding: '2rem' }}>Hover to lean</TiltSurface>,
  VelocityMarquee: () => <VelocityMarquee items={['Operational systems', 'Commerce infrastructure', 'Automation']} />,

  /* ---- ui ---- */
  Button: () => <Button magnetic={false}>Primary action</Button>,
  CatalogError: () => <CatalogError subject="page list" retry={noop} />,
  DataPanel: () => <DataPanel code="SYS.04" label="Internal platforms"><p>Dashboards, administrative controls and workflow actions.</p></DataPanel>,
  GlitchLine: () => <GlitchLine />,
  Pill: () => <Pill dot>Live</Pill>,
  SectionHeader: () => <SectionHeader eyebrow="Development / Components" title="The interface, in working parts." intro="Sixty-one components." reveal={false} />,
};

