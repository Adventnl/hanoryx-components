/* RECIPE · Dashboard — figures, a table and small charts.
   Everything is a Grid cell. Stats are `fill` components in a `Grid min="13rem"`;
   the table fills its cell and scrolls sideways inside itself on a phone.
   Sizes: stat cell ≥ 13rem · table cell ≥ 28rem (else it takes the whole row). */
import { Alert, BarList, Card, DataTable, Grid, Sparkline, Stack, Stat, StatusDot, Cluster } from 'hanoryx-components';

export const meta = {
  title: 'Dashboard',
  summary: 'Four figures on top, a sortable table and two small charts below, with a status banner.',
  uses: ['Grid', 'Stat', 'Card', 'DataTable', 'BarList', 'Sparkline', 'Alert', 'StatusDot'],
  notes: [
    '`Grid min="13rem"` is the whole responsive system: as many columns as fit, none narrower than 13rem. No breakpoints to maintain.',
    'The wide table and the chart column are one `Grid min="28rem"`: side by side on a desktop, stacked on a phone.',
    'Put figures in `Stat`, never in a heading: `Stat` writes the change as words for a screen reader.',
    'Cards are the only padded wrapper. Do not pad the `Grid`.',
  ],
};

const ROWS = [
  { id: 1, job: 'Nightly export', owner: 'Operations', mins: 12 },
  { id: 2, job: 'Invoice run', owner: 'Commerce', mins: 34 },
  { id: 3, job: 'Backup', owner: 'Platform', mins: 8 },
  { id: 4, job: 'Report mail-out', owner: 'Operations', mins: 21 },
];
const COLS = [{ key: 'job', label: 'Job', sortable: true }, { key: 'owner', label: 'Owner', sortable: true }, { key: 'mins', label: 'Minutes', sortable: true, align: 'right' }];

export default function Dashboard() {
  return (
    <section className="section" style={{ paddingBlock: 'var(--section-pad-sm)' }}>
      <div className="container">
        <Stack gap={6}>
          <Alert tone="info" title="Maintenance window">Tonight 02:00–02:30 UTC. Scheduled jobs will queue, not fail.</Alert>
          <Grid min="13rem" gap={4}>
            <Stat label="Jobs on time" value="96" unit="%" change={2} changeLabel="vs. last week" />
            <Stat label="Open orders" value="128" change={-4} changeLabel="vs. last week" />
            <Stat label="Avg. duration" value="19" unit="min" />
            <Stat label="Incidents" value="0" />
          </Grid>
          <Grid min="28rem" gap={4}>
            <Card eyebrow="Schedule" title="Scheduled jobs"><DataTable caption="Scheduled jobs" rows={ROWS} columns={COLS} /></Card>
            <Stack gap={4}>
              <Card eyebrow="Latency" title="Response time"><Sparkline label="Response time" unit=" ms" data={[210, 190, 205, 180, 150, 140, 138]} /></Card>
              <Card eyebrow="Load" title="Jobs by owner"><BarList label="Jobs by owner" items={[{ label: 'Operations', value: 12 }, { label: 'Platform', value: 8 }, { label: 'Commerce', value: 5 }]} /></Card>
              <Cluster gap={3}><StatusDot state="ok" label="API" /><StatusDot state="ok" label="Queue" /><StatusDot state="warn" label="Mail" /></Cluster>
            </Stack>
          </Grid>
        </Stack>
      </div>
    </section>
  );
}
