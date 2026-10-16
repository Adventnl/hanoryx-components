import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { areaHref, hrefOf } from '../data';
import { Preview, hasPreviewRoute, noPreviewReason } from '../preview/Preview';
import { Inline } from '../Inline';

const WIDTHS = [['Fluid', null], ['360', 360], ['768', 768], ['1200', 1200]];

function CopyButton({ text, label = 'Copy' }) {
  const [done, setDone] = useState(false);
  return (
    <button type="button" className="sx-copy" onClick={() => { navigator.clipboard?.writeText(text).then(() => { setDone(true); setTimeout(() => setDone(false), 1400); }); }}>{done ? 'Copied' : label}</button>
  );
}

function PreviewPanel({ entry, data }) {
  const [w, setW] = useState(null);
  const [n, setN] = useState(0);
  const fam = entry.area === 'specimens' ? data.families.find((f) => f.slug === entry.family) : null;
  const wide = ['signatures', 'closers', 'page', 'scenes'].includes(entry.area);
  const preview = <Preview key={`${entry.id}-${n}`} entry={entry} data={data} />;
  return (
    <section aria-labelledby="pv" className="sx-panel">
      <div className="sx-panel-bar">
        <h2 id="pv" className="sx-h3">Live</h2>
        <div role="group" aria-label="Preview width" className="sx-seg">
          {WIDTHS.map(([label, v]) => <button type="button" key={label} aria-pressed={w === v} onClick={() => setW(v)}>{label}</button>)}
        </div>
        <button type="button" className="sx-copy" onClick={() => setN((x) => x + 1)}>Reset</button>
        <Link className="sx-copy" to={`/raw/${entry.id}${w ? `?w=${w}` : ''}`} target="_blank">Bare page ↗</Link>
      </div>
      <div className="sx-bed" data-wide={wide} data-frame={fam?.frame}>
        <div className="sx-bed-inner" style={w ? { width: w, maxWidth: 'none' } : undefined}>{preview}</div>
      </div>
    </section>
  );
}

function SizingPanel({ entry }) {
  const s = entry.sizing;
  const m = s?.measured ?? (s?.at ? s : null);
  if (!s) return null;
  const rows = m?.at ? Object.entries(m.at) : [];
  return (
    <section aria-labelledby="sz" className="sx-section">
      <h2 id="sz" className="sx-h3">Sizing</h2>
      {m?.behavior && <p className="sx-sizing-lead"><b className="sx-tag" data-b={m.behavior}>{m.behavior}</b> {BEHAVIOR[m.behavior]}</p>}
      {s.rules?.length > 0 && <ul className="sx-rules">{s.rules.map((r) => <li key={r}>{r}</li>)}</ul>}
      {rows.length > 0 && (
        <div className="sx-table"><table>
          <caption>Measured in a parent of each width (px), at 16px root size</caption>
          <thead><tr><th>Parent width</th><th>Width</th><th>Height</th><th>Ratio</th></tr></thead>
          <tbody>{rows.map(([pw, v]) => <tr key={pw}><td>{pw}</td><td>{v.w}</td><td>{v.h}</td><td>{v.h ? (v.w / v.h).toFixed(2) : '–'}</td></tr>)}</tbody>
        </table></div>
      )}
      {m && (m.padding || m.radius || m.fontSize || m.gap || m.minTouch) && (
        <dl className="sx-meta">
          {m.padding && <div><dt>Padding (root)</dt><dd>{m.padding}</dd></div>}
          {m.gap && <div><dt>Gap</dt><dd>{m.gap}</dd></div>}
          {m.radius && <div><dt>Radius</dt><dd>{m.radius}</dd></div>}
          {m.fontSize && <div><dt>Type</dt><dd>{m.fontSize}</dd></div>}
          {m.minTouch && <div><dt>Smallest control</dt><dd>{m.minTouch}</dd></div>}
        </dl>
      )}
    </section>
  );
}

const BEHAVIOR = {
  fill: 'Takes the width of its parent. Give it a parent with the width you want; never set a width on it.',
  intrinsic: 'Sizes to its content. Centre it or put it in a row; it will not stretch.',
  fixed: 'Has its own dimensions that do not follow the parent. Leave at least this much room.',
};

function PropsTable({ props }) {
  if (!props?.length) return null;
  return (
    <section aria-labelledby="pr" className="sx-section">
      <h2 id="pr" className="sx-h3">Props</h2>
      <div className="sx-table"><table>
        <thead><tr><th>Prop</th><th>Default</th><th>Notes</th></tr></thead>
        <tbody>{props.map((p) => (
          <tr key={p.name}><td><code>{p.name}</code>{p.required && <abbr title="Required"> *</abbr>}</td><td>{p.default ? <code>{p.default}</code> : '—'}</td><td>{p.type && <code className="sx-type">{p.type}</code>} <Inline text={p.description} /></td></tr>
        ))}</tbody>
      </table></div>
    </section>
  );
}

function usageSnippet(entry) {
  const ex = entry.examples?.[0]?.code;
  if (ex) return ex;
  if (entry.kind === 'hook') return `const result = ${entry.name}(${(entry.params ?? []).join(', ')});`;
  if (entry.kind === 'specimen') return `<${entry.name} />`;
  if (entry.kind === 'profile') return entry.import;
  if (entry.kind === 'scene') return entry.import;
  if (entry.kind === 'function') return `${entry.name}(${(entry.params ?? []).join(', ')})`;
  const req = (entry.props ?? []).filter((p) => p.required).map((p) => ` ${p.name}={…}`).join('');
  return `<${entry.name}${req} />`;
}

export default function ComponentPage({ data }) {
  const { pathname } = useLocation();
  const id = decodeURIComponent(pathname.replace(/^\/c\//, ''));
  const entry = data.byId.get(id);
  const topRef = useRef(null);
  useEffect(() => { if (entry) document.title = `${entry.label ?? entry.name} — Hanoryx Components`; topRef.current?.focus({ preventScroll: true }); }, [entry]);
  const siblings = useMemo(() => (entry ? (data.byFamily.get(`${entry.area}/${entry.family ?? ''}`) ?? []).filter((e) => e !== entry && !e.parent).slice(0, 12) : []), [entry, data]);
  if (!entry) return <div><h1 className="sx-h1">Not found</h1><p>No entry called <code>{id}</code>. Try the search.</p></div>;

  const area = data.areas.find((a) => a.id === entry.area);
  const fam = entry.area === 'specimens' ? data.families.find((f) => f.slug === entry.family) : null;
  const famLabel = fam ? fam.title : data.kitFamilies?.[entry.family] ?? entry.family;
  const hasLive = Boolean(entry.area === 'specimens' || ['kit', 'fx', 'ui', 'page', 'signatures', 'closers'].includes(entry.area) || entry.kind === 'scene' || entry.kind === 'profile');
  const importText = entry.import;
  return (
    <article className="sx-component">
      <nav aria-label="Breadcrumb" className="sx-crumbs">
        <Link to="/">Library</Link> / <Link to={areaHref(entry.area)}>{area.title}</Link>
        {entry.family && <> / <Link to={areaHref(entry.area, entry.family)}>{famLabel}</Link></>}
      </nav>
      <header className="sx-head">
        <h1 className="sx-h1" ref={topRef} tabIndex={-1}>{entry.label ?? entry.name}</h1>
        <ul className="sx-chips">
          <li>{entry.kind}</li>{entry.mode && <li>{entry.mode}</li>}{entry.parent && <li>part of {entry.parent}</li>}
          {entry.usedAs?.map((u) => <li key={u.kind}>{u.via}: <code>{u.kind}</code></li>)}
        </ul>
        {entry.summary && <p className="sx-lede"><Inline text={entry.summary} /></p>}
        <div className="sx-import"><code>{importText}</code><CopyButton text={importText} /></div>
      </header>

      {hasLive ? <PreviewPanel entry={entry} data={data} /> : (
        <section className="sx-panel sx-nopreview"><p>{noPreviewReason(entry)}</p>
          {entry.area === 'shell' && <Link className="sx-btn" to="/preview/shell">Open the shell preview →</Link>}
          {entry.area === 'stage' && <Link className="sx-btn" to="/preview/stage/switchboard">Open a stage preview →</Link>}
        </section>
      )}
      {hasPreviewRoute(entry) && null}

      <SizingPanel entry={entry} />
      <PropsTable props={entry.props} />

      {entry.params?.length > 0 && (
        <section className="sx-section"><h2 className="sx-h3">Parameters</h2><pre className="sx-code"><code>{entry.name}({entry.params.join(', ')})</code></pre></section>
      )}
      {entry.description && <section className="sx-section"><h2 className="sx-h3">Notes from the source</h2><p className="sx-pre">{entry.description}</p></section>}
      {entry.usage?.bestPractices?.length > 0 && (
        <section className="sx-section"><h2 className="sx-h3">Do and don't</h2>
          <ul className="sx-dodont">{entry.usage.bestPractices.map((b, i) => <li key={i} data-do={b.do}><b>{b.do ? 'Do' : "Don't"}</b> {b.text}</li>)}</ul>
        </section>
      )}
      {entry.keyboard?.length > 0 && (
        <section className="sx-section"><h2 className="sx-h3">Keyboard</h2>
          <dl className="sx-keys">{entry.keyboard.map((k) => <div key={k.key}><dt><kbd>{k.key}</kbd></dt><dd>{k.does}</dd></div>)}</dl>
        </section>
      )}
      {entry.notes?.length > 0 && <section className="sx-section"><h2 className="sx-h3">Notes</h2><ul className="sx-notes">{entry.notes.map((n) => <li key={n}>{n}</li>)}</ul></section>}

      <section className="sx-section"><h2 className="sx-h3">Usage</h2>
        <div className="sx-import sx-import-block"><pre><code>{`${importText}\n\n${usageSnippet(entry)}`}</code></pre><CopyButton text={`${importText}\n\n${usageSnippet(entry)}`} /></div>
      </section>

      <section className="sx-section"><h2 className="sx-h3">Source</h2>
        <p className="sx-meta-line"><code>{entry.source}</code>{entry.styles && <> · styles <code>{entry.styles}</code></>}</p>
      </section>

      {siblings.length > 0 && (
        <section className="sx-section"><h2 className="sx-h3">Also in {famLabel ?? area.title}</h2>
          <ul className="sx-pills">{siblings.map((s) => <li key={s.id}><Link to={hrefOf(s)}><b>{s.label ?? s.name}</b></Link></li>)}</ul>
        </section>
      )}
    </article>
  );
}
