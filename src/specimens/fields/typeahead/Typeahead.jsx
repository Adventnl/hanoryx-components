import { useState } from 'react';
import c from "../fields.module.css";

const WORDS = ['alpha', 'amber', 'anchor', 'beacon', 'bridge', 'cipher', 'delta', 'ember', 'falcon', 'harbor', 'island', 'junction'];

/* 8 */ export function Typeahead() {
  const [q, setQ] = useState('');
  const hits = q ? WORDS.filter((w) => w.startsWith(q.toLowerCase())).slice(0, 4) : [];
  return (
    <div className={c.ahead}>
      <input value={q} placeholder="Try “a” or “b”" aria-label="Typeahead" onChange={(e) => setQ(e.target.value)} />
      {hits.length > 0 && <ul>{hits.map((w) => <li key={w}><button type="button" onClick={() => setQ(w)}><b>{w.slice(0, q.length)}</b>{w.slice(q.length)}</button></li>)}</ul>}
    </div>
  );
}
