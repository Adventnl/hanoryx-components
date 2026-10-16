import { Link } from 'react-router-dom';
import { areaHref } from '../data';

const START = [
  ['Build a page', '/guides/layout-recipes', 'Six page skeletons with the exact tokens, widths and padding.'],
  ['Get sizes right', '/guides/sizing', 'Spacing scale, type scale, widths, ratios and what each component does when its parent changes.'],
  ['Give it to an LLM', '/guides/for-llms', 'llms.txt, the manifest, the CLI and the rules that stop a page from breaking.'],
  ['See the whole shell', '/preview/shell', 'Navbar, footer, search, shortcuts and route transitions around a page.'],
];

export default function Home({ data }) {
  const total = data.entries.length;
  return (
    <div className="sx-home">
      <header className="sx-hero">
        <p className="sx-eyebrow">Hanoryx / Components</p>
        <h1>Everything the site is made of, in one library.</h1>
        <p className="sx-lede">{total.toLocaleString()} catalogued pieces — the interface kit, the foreground toolkit, the page blocks, the shell, {data.counts.scenes - 2} canvas scenes, {data.counts.signatures + data.counts.closers} compositions and {data.counts.specimens.toLocaleString()} stand-alone specimens — each with a live example, its props and how big it is.</p>
        <dl className="sx-facts">
          <div><dt>Specimens</dt><dd>{data.counts.specimens.toLocaleString()}</dd></div>
          <div><dt>Families</dt><dd>{data.families.length}</dd></div>
          <div><dt>Kit components</dt><dd>{data.counts.kit}</dd></div>
          <div><dt>Scenes</dt><dd>{data.entries.filter((e) => e.kind === 'scene').length}</dd></div>
          <div><dt>Reveal profiles</dt><dd>{data.entries.filter((e) => e.kind === 'profile').length}</dd></div>
        </dl>
      </header>

      <section aria-labelledby="start">
        <h2 id="start" className="sx-h2">Start here</h2>
        <ul className="sx-cards">
          {START.map(([t, to, d]) => <li key={t}><Link to={to}><b>{t}</b><span>{d}</span></Link></li>)}
        </ul>
      </section>

      <section aria-labelledby="areas">
        <h2 id="areas" className="sx-h2">The library</h2>
        <ul className="sx-cards sx-cards-areas">
          {data.areas.map((a) => (
            <li key={a.id}>
              <Link to={areaHref(a.id)}>
                <em>{data.counts[a.id].toLocaleString()}</em>
                <b>{a.title}</b>
                <span>{a.blurb}</span>
                <code>hanoryx-components/{a.pkg}</code>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="install">
        <h2 id="install" className="sx-h2">Use it</h2>
        <pre className="sx-code"><code>{`import 'hanoryx-components/styles';                        // once, at the app root
import { HanoryxProvider, TextField, Stat, Grid } from 'hanoryx-components';

<HanoryxProvider smoothScroll={false}>
  <Grid min="14rem">
    <Stat label="Open orders" value="128" />
    <TextField label="Search" />
  </Grid>
</HanoryxProvider>`}</code></pre>
      </section>
    </div>
  );
}
