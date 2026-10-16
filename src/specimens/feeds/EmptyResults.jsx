import { useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './feeds.module.css';
import { Fd } from './shared';

/* 15 */ export function EmptyResults() {
  const [q, setQ] = useState('zzz');
  return (
    <Fd label="Empty results" className={c.center}>
      <label className={c.search}><Ico n="search" /><input value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search" /></label>
      {q === 'zzz' ? <><span className={c.art}><Ico n="search" /></span><b>No results for “zzz”</b><small className={c.m}>Try fewer letters</small></> : <span className={c.plain}>Showing “{q}”</span>}
    </Fd>
  );
}
