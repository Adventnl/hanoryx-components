import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../feeds.module.css";
import { Fd } from "../shared";

/* 09 */ export function FilterFeed() {
  const [q, setQ] = useState('');
  const P = ['Launch day notes', 'Pricing update', 'Hiring: designer', 'Launch retro', 'Office move'];
  const hit = P.filter((p) => p.toLowerCase().includes(q.toLowerCase()));
  return (
    <Fd label="Filtered feed" className={c.list}>
      <label className={c.search}><Ico n="search" /><input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Filter" aria-label="Filter posts" /></label>
      {hit.map((p) => <span key={p} className={c.plain}>{p}</span>)}
      <small className={c.m}>{hit.length} of {P.length}</small>
    </Fd>
  );
}
