/* RECIPE · Reading page — navigation, prose, contents.
   Three columns on desktop, one on a phone. The reading column is capped at
   --maxw-text (760px); the side columns are fixed-width rails that collapse.
   Sizes: SideNav 14rem · Prose ≤ 760px · OnThisPage 12rem. */
import { Callout, CodeBlock, OnThisPage, Prose, SideNav, Stack, Badge, Cluster } from 'hanoryx-components';

export const meta = {
  title: 'Reading page',
  summary: 'Documentation or an article: side navigation, a capped reading column and an "on this page" list.',
  uses: ['SideNav', 'Prose', 'OnThisPage', 'Callout', 'CodeBlock', 'Badge', 'Cluster'],
  notes: [
    'The text column is `Prose`, which caps itself at `--maxw-text`. Do not widen it: lines over ~75 characters are harder to read.',
    'The two rails are columns of a grid, not components with widths: `grid-template-columns: 14rem minmax(0, 760px) 12rem`. They drop out under 960px.',
    'Use `Callout` for the one remark a reader must not miss — not for every paragraph.',
  ],
};

const css = `
.rc-article { display: grid; grid-template-columns: 14rem minmax(0, var(--maxw-text)) 12rem; gap: var(--space-8); justify-content: center; align-items: start; }
.rc-article > aside { position: sticky; top: calc(var(--nav-h) + var(--space-5)); }
@media (max-width: 960px) { .rc-article { grid-template-columns: minmax(0, 1fr); } .rc-article > aside { display: none; } }
`;

export default function Article() {
  return (
    <section className="section">
      <style>{css}</style>
      <div className="container">
        <div className="rc-article">
          <aside aria-label="Handbook">
            <SideNav current="/handover" groups={[{ label: 'Reliability', open: true, items: [{ label: 'Handover', to: '/handover' }, { label: 'Runbooks', to: '/runbooks' }, { label: 'Triggers', to: '/triggers' }] }, { label: 'Quality', items: [{ label: 'Testing', to: '/testing' }] }]} />
          </aside>
          <article>
            <Stack gap={5}>
              <Cluster gap={2}><Badge tone="outline">Guide</Badge><Badge tone="neutral">8 min</Badge></Cluster>
              <h1 className="heading-1">Handing a system over</h1>
              <p className="lead">A handover is a short document and a shorter conversation. It exists so the person receiving it can run the system on day one.</p>
              <Prose>
                <h2 id="what">What a handover contains</h2>
                <p>What the system does, who depends on it, how it fails and how to tell. Anything that is only in someone's head is a risk, not a detail.</p>
                <ul><li>What it does and for whom</li><li>How it fails, and how to tell</li><li>Where its data lives</li></ul>
                <h2 id="how">How it is run</h2>
                <p>Every operation that can be repeated is a runbook with a name.</p>
              </Prose>
              <Callout tone="tip">Write the failure modes first. They are the part nobody remembers.</Callout>
              <CodeBlock filename="runbook.sh" code={'# restart the worker, then confirm it is draining\nsystemctl restart intake-worker\njournalctl -u intake-worker -n 20'} />
            </Stack>
          </article>
          <aside aria-label="On this page"><OnThisPage items={[{ id: 'what', label: 'What a handover contains' }, { id: 'how', label: 'How it is run' }]} /></aside>
        </div>
      </div>
    </section>
  );
}
