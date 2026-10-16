/* RECIPE · Card grid — plans, services, areas.
   Cards are `fill` components: width comes from the Grid cell. `Grid min="16rem"`
   gives 1 column on a phone, 2 on a tablet, 3–4 on a desktop with no breakpoint.
   Sizes: card ≥ 16rem wide, padding --space-5 (24px), radius --r-lg (14px). */
import { ArrowLink, Badge, Card, Cluster, Grid, SectionHeader, Stack } from 'hanoryx-components';

export const meta = {
  title: 'Card grid',
  summary: 'A section header and a responsive grid of equal cards, each with a badge and a link.',
  uses: ['SectionHeader', 'Grid', 'Card', 'Badge', 'ArrowLink', 'Cluster'],
  notes: [
    'The header is `SectionHeader` (eyebrow + serif title + intro) — never a bare `<h2>` with your own sizes.',
    'Equal-height cards come free: grid items stretch. Do not set a height on the cards.',
    'One `variant="accent"` card at most — the recommended one. Red is a single emphasis.',
    'A card that is a link wraps its title in the link; do not make the whole card clickable and also put links inside it.',
  ],
};

const PLANS = [
  { eyebrow: 'Start', title: 'Self-serve', badge: 'Free', body: 'Runbooks, the handbook and the tools, with no contact needed.' },
  { eyebrow: 'Recommended', title: 'Team', badge: 'Most chosen', variant: 'accent', body: 'A named contact and a standing weekly review of the system.' },
  { eyebrow: 'Scale', title: 'Platform', badge: 'Custom', body: 'Dedicated engineering for platforms that carry real operational load.' },
];

export default function CardGrid() {
  return (
    <section className="section" style={{ paddingBlock: 'var(--section-pad-sm)' }}>
      <div className="container">
        <Stack gap={8}>
          <SectionHeader eyebrow="Support" title="Choose how we work with you." intro="Three levels, each a superset of the one before." reveal={false} />
          <Grid min="16rem" gap={5}>
            {PLANS.map((p) => (
              <Card key={p.title} eyebrow={p.eyebrow} title={p.title} variant={p.variant} footer={<Cluster justify="space-between"><Badge tone={p.variant ? 'red' : 'outline'}>{p.badge}</Badge><ArrowLink href="#/">Details</ArrowLink></Cluster>}>{p.body}</Card>
            ))}
          </Grid>
        </Stack>
      </div>
    </section>
  );
}
