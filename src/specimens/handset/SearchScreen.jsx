import { useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './handset.module.css';
import { Phone } from './shared';

/* 13 */ export function SearchScreen() {
  const [q, setQ] = useState('');
  const R = ['coffee', 'bike', 'rent', 'music'];
  return (
    <Phone label="Search screen">
      <label className={c.search}><Ico n="search" /><input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search" aria-label="Search" /></label>
      <span className={c.p}>Recent</span>
      <div className={c.chips}>{R.filter((r) => r.includes(q.toLowerCase())).map((r) => <button key={r} type="button" className={c.chip} onClick={() => setQ(r)}>{r}</button>)}</div>
    </Phone>
  );
}
