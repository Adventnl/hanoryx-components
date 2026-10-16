import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { areaHref, hrefOf } from '../data';
import { loadFamily } from '../preview/Preview';
import { Inline } from '../Inline';
import { Specimen } from 'hanoryx-components/stage';

function Sheet({ fam, data }) {
  const [loaded, setLoaded] = useState({ slug: null, mod: null });
  useEffect(() => { let live = true; loadFamily(fam.slug).then((m) => live && setLoaded({ slug: fam.slug, mod: m })); return () => { live = false; }; }, [fam.slug]);
  const mod = loaded.slug === fam.slug ? loaded.mod : null;
  const entries = data.byFamily.get(`specimens/${fam.slug}`) ?? [];
  if (!mod) return <div className="sx-loading">Loading {fam.count} specimens…</div>;
  return (
    <div className="sx-sheet" data-frame={fam.frame}>
      {mod.items.map(([name, C, mode], i) => (
        <div key={name} className="sx-sheet-cell">
          <Specimen no={fam.number} i={i} name={name} mode={mode} slug={fam.slug}><C /></Specimen>
          <Link className="sx-sheet-link" to={hrefOf(entries[i])}>Details</Link>
        </div>
      ))}
    </div>
  );
}

function FamilyHeader({ fam, data }) {
  return (
    <header className="sx-head">
      <p className="sx-eyebrow">Specimens / {fam.chapterTitle}</p>
      <h1 className="sx-h1">{fam.title}</h1>
      <p className="sx-lede">{fam.line} {fam.blurb}</p>
      <dl className="sx-meta">
        <div><dt>Specimens</dt><dd>{fam.count}</dd></div>
        <div><dt>Stage</dt><dd>{data.stages[fam.stage]?.label ?? fam.stage}</dd></div>
        <div><dt>Frame</dt><dd>{fam.frame}</dd></div>
        <div><dt>Import</dt><dd><code>hanoryx-components/specimens/{fam.slug}</code></dd></div>
      </dl>
      <p><Link className="sx-btn" to={`/preview/stage/${fam.slug}`}>Open on its {data.stages[fam.stage]?.label?.toLowerCase() ?? 'stage'} stage →</Link></p>
    </header>
  );
}

export default function AreaPage({ data }) {
  const { area, family } = useParams();
  const a = data.areas.find((x) => x.id === area);
  useEffect(() => { document.title = `${family ? (data.families.find((f) => f.slug === family)?.title ?? data.kitFamilies?.[family] ?? family) : (a?.title ?? 'Library')} — Hanoryx Components`; }, [a, family, data]);
  if (!a) return <p>Unknown area.</p>;

  if (area === 'specimens' && family) {
    const fam = data.families.find((f) => f.slug === family);
    if (!fam) return <p>Unknown family.</p>;
    return <div><FamilyHeader fam={fam} data={data} /><Sheet fam={fam} data={data} /></div>;
  }

  if (area === 'specimens') {
    return (
      <div>
        <header className="sx-head"><p className="sx-eyebrow">Library</p><h1 className="sx-h1">{a.title}</h1><p className="sx-lede">{a.blurb}</p></header>
        {data.chapters.map((c) => (
          <section key={c.id} aria-labelledby={`ch-${c.id}`}>
            <h2 id={`ch-${c.id}`} className="sx-h2"><em>{c.code}</em> {c.title}<small>{c.blurb}</small></h2>
            <ul className="sx-cards">
              {data.families.filter((f) => f.chapter === c.id).map((f) => (
                <li key={f.slug}><Link to={areaHref('specimens', f.slug)}><em>{f.count}</em><b>{f.title}</b><span>{f.line}</span></Link></li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    );
  }

  const entries = data.byArea.get(area).filter((e) => !e.parent && (!family || e.family === family));
  const groups = new Map();
  entries.forEach((e) => { const k = e.family ?? ''; if (!groups.has(k)) groups.set(k, []); groups.get(k).push(e); });
  const single = [...groups.keys()].length === 1 && !family;
  return (
    <div>
      <header className="sx-head">
        <p className="sx-eyebrow">Library{family ? ` / ${a.title}` : ''}</p>
        <h1 className="sx-h1">{family ? (data.kitFamilies?.[family] ?? family) : a.title}</h1>
        <p className="sx-lede">{a.blurb}</p>
        <p className="sx-meta-line">Import from <code>hanoryx-components/{a.pkg}</code></p>
      </header>
      {[...groups.entries()].map(([fam, list]) => (
        <section key={fam} aria-label={fam || a.title}>
          {!single && fam && <h2 className="sx-h2"><Link to={areaHref(area, fam)}>{data.kitFamilies?.[fam] ?? fam}</Link><small>{list.length}</small></h2>}
          <ul className={list.length > 40 ? 'sx-pills' : 'sx-list'}>
            {list.map((e) => (
              <li key={e.id}><Link to={hrefOf(e)}><b>{e.name}</b>{list.length <= 40 && <small><Inline text={e.summary} /></small>}</Link></li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
