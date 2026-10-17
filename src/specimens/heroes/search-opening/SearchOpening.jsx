import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../heroes.module.css";
import { Sc } from "../shared";

/* 29 */ export function SearchOpening() {
  const [q, setQ] = useState('');
  const S = ['pricing', 'docs', 'status', 'security'].filter((x) => q && x.startsWith(q.toLowerCase()));
  return <Sc label="Search hero" className={c.cen}><h3>Ask anything</h3><label className={c.big2}><Ico n="search" /><input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search" aria-label="Search" /></label>{S.length ? <div className={c.sug}>{S.map((s) => <button key={s} type="button" onClick={() => setQ(s)}>{s}</button>)}</div> : <small>Try “p” or “d”</small>}</Sc>;
}
