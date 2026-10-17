import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { hrefOf } from './data';
import CatalogTree from './navigation/CatalogTree';



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
      <input id="sx-q" ref={ref} type="search" autoComplete="off" spellCheck="false" placeholder={`Search ${data.entries.length.toLocaleString()} entries…  ( / )`} value={q}
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
      <aside id="sx-side" className="sx-side"><CatalogTree data={data} /></aside>
      <main id="sx-main" className="sx-main" tabIndex={-1}>{children}</main>
    </div>
  );
}
