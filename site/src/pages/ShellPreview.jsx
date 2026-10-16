/* The whole site shell around a sample page: navbar, footer, search (Ctrl/⌘ K),
   shortcuts (?), cursor, route transitions. Links lead to pages this site does
   not have; everything else is the real thing. */
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { PageTemplate, SiteShell } from 'hanoryx-components';
import blocks from '../../../docs/examples/blocks.json';

try { sessionStorage.setItem('hnx.boot.complete', '1'); } catch { /* storage unavailable */ }

export default function ShellPreview() {
  const data = useMemo(() => ({
    key: 'preview', title: 'Shell preview', accent: '#ff3333',
    hero: { scene: 'polar-radar', intensity: 'hero', eyebrow: 'Shell / Preview', code: 'HX.SHELL', status: 'LIVE', title: 'The frame around every page.', intro: 'Navbar, footer, search, shortcuts, cursor and route transitions, around a page made of two blocks.' },
    blocks: [blocks.split?.props, blocks.cards?.props].filter(Boolean),
  }), []);
  return (
    <>
      <Link to="/" style={{ position: 'fixed', left: 12, bottom: 12, zIndex: 100001, font: '500 0.65rem var(--font-mono)', letterSpacing: '0.18em', textTransform: 'uppercase', padding: '0.6rem 0.9rem', background: '#000', border: '1px solid var(--c-line-strong)', color: 'var(--c-white)' }}>← Back to docs</Link>
      <SiteShell><PageTemplate data={data} /></SiteShell>
    </>
  );
}
