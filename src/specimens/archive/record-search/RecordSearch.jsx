import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../archive.module.css";

const RECS = ['Hale deed 1931', 'Hale lease 1958', 'Rowe will 1972', 'Rowe letters 1974', 'Wren charter 1899', 'Wren map 1902'];

/* 35 */ export function RecordSearch() {
  const [q, setQ] = useState('hale');
  const hit = RECS.filter((r) => r.toLowerCase().includes(q.toLowerCase()));
  return (
    <div className={c.search}>
      <label><Ico n="search" /><input value={q} onChange={(e) => setQ(e.target.value)} aria-label="Search the records" spellCheck={false} autoComplete="off" /></label>
      <ul>{hit.slice(0, 4).map((r) => <li key={r}>{r}</li>)}</ul>
      <small>{hit.length} of {RECS.length} records</small>
    </div>
  );
}
