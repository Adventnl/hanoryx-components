import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { areaHref, hrefOf } from './data';

import { GUIDES, RECIPES } from './nav';

function Tree({ data }) {
  const { pathname } = useLocation();
  return (
    <nav className="sx-tree" aria-label="Components">
      <div className="sx-group">
        <h2>Guides</h2>
        <ul>
          <li><NavLink to="/" end>Overview</NavLink></li>
          {GUIDES.map(([slug, label]) => <li key={slug}><NavLink to={`/guides/${slug}`}>{label}</NavLink></li>)}
          <li><NavLink to="/preview/shell">Shell preview</NavLink></li>
        </ul>
      </div>
      <div className="sx-group">
        <h2>Recipes</h2>
        <ul>{RECIPES.map(([slug, label]) => <li key={slug}><NavLink to={`/recipes/${slug}`}>{label}</NavLink></li>)}</ul>
      </div>
      <div className="sx-group">
        <h2>Library</h2>
        {data.areas.map((a) => {
          const open = pathname.startsWith(`/a/${a.id}`) || pathname.startsWith(`/c/${a.id}/`);
          const fams = a.id === 'specimens'
            ? data.chapters.map((c) => ({ id: c.id, title: `${c.code} ${c.title}`, families: data.families.filter((f) => f.chapter === c.id) }))
            : [...new Set(data.byArea.get(a.id).map((e) => e.family).filter(Boolean))].map((f) => ({ id: f, title: data.kitFamilies?.[f] ?? f, link: areaHref(a.id, f) }));
          return (
            <details key={a.id} open={open} className="sx-area">
              <summary><span>{a.title}</span><i>{data.counts[a.id]}</i></summary>
              <ul>
                <li><NavLink to={areaHref(a.id)} end>All {a.title.toLowerCase()}</NavLink></li>
                {a.id === 'specimens'
                  ? fams.map((c) => (
                    <li key={c.id} className="sx-chapter"><span>{c.title}</span>
                      <ul>{c.families.map((f) => <li key={f.slug}><NavLink to={areaHref('specimens', f.slug)}>{f.title}<i>{f.count}</i></NavLink></li>)}</ul>
                    </li>
                  ))
                  : fams.length > 1 || (fams.length === 1 && fams[0].id !== a.id) ? fams.map((f) => <li key={f.id}><NavLink to={f.link}>{f.title}</NavLink></li>) : null}
              </ul>
            </details>
          );
        })}
      </div>
    </nav>
  );
}

function SearchBox({ data }) {
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const nav = useNavigate();
  const ref = useRef(null);
  const results = useMemo(() => data.search(q, 8), [data, q]);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.key === '/' && !/input|textarea|select/i.test(document.activeElement?.tagName)) || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k')) {
        e.preventDefault();
        ref.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const go = (e) => { setOpen(false); setQ(''); nav(hrefOf(e)); };
  const onKey = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setActive((i) => Math.min(results.length - 1, i + 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive((i) => Math.max(0, i - 1)); }
    else if (e.key === 'Enter') { e.preventDefault(); if (results[active] && q.trim()) go(results[active]); else if (q.trim()) { nav(`/search?q=${encodeURIComponent(q)}`); setOpen(false); } }
    else if (e.key === 'Escape') { setOpen(false); e.currentTarget.blur(); }
  };

  return (
    <div className="sx-search" role="search">
      <label className="sx-vh" htmlFor="sx-q">Search components</label>
      <input id="sx-q" ref={ref} type="search" autoComplete="off" spellCheck="false" placeholder="Search 2,600 components…  ( / )" value={q}
        onChange={(e) => { setQ(e.target.value); setOpen(true); setActive(0); }} onFocus={() => setOpen(true)} onBlur={() => setTimeout(() => setOpen(false), 120)} onKeyDown={onKey}
        role="combobox" aria-expanded={open && results.length > 0} aria-controls="sx-results" aria-autocomplete="list" />
      {open && q.trim() && (
        <ul id="sx-results" className="sx-results" role="listbox">
          {results.map((e, i) => (
            <li key={e.id} role="option" aria-selected={i === active}>
              <button type="button" onMouseDown={(ev) => { ev.preventDefault(); go(e); }} data-active={i === active}>
                <b>{e.label ?? e.name}</b><span>{e.area}{e.family ? ` / ${e.family}` : ''}</span>
              </button>
            </li>
          ))}
          {results.length === 0 && <li className="sx-none">Nothing matches “{q}”.</li>}
          {results.length > 0 && <li><button type="button" className="sx-all" onMouseDown={(ev) => { ev.preventDefault(); nav(`/search?q=${encodeURIComponent(q)}`); setOpen(false); }}>See all results</button></li>}
        </ul>
      )}
    </div>
  );
}

export default function Layout({ data, children }) {
  const [nav, setNav] = useState(false);
  const { pathname } = useLocation();
  // Close the mobile menu on navigation (adjusted while rendering, not in an effect).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) { setLastPath(pathname); if (nav) setNav(false); }
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return (
    <div className="sx-app" data-nav={nav}>
      <a className="skip-link" href="#sx-main">Skip to content</a>
      <header className="sx-top">
        <button type="button" className="sx-burger" aria-expanded={nav} aria-controls="sx-side" onClick={() => setNav((v) => !v)}><span /><span /><span /><i className="sx-vh">Menu</i></button>
        <Link to="/" className="sx-brand"><b>HANORYX</b><span>Components</span></Link>
        <SearchBox data={data} />
      </header>
      <aside id="sx-side" className="sx-side"><Tree data={data} /></aside>
      <main id="sx-main" className="sx-main" tabIndex={-1}>{children}</main>
    </div>
  );
}
