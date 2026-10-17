import { useState } from 'react';
import c from "../markup.module.css";

const FIND = 'The belt keeps moving. The belt does not stop for tea, and the belt does not ask why.';

const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export function FindInText() {
  const [q, setQ] = useState('belt');
  const parts = q ? FIND.split(new RegExp(`(${escape(q)})`, 'ig')) : [FIND];
  const n = q ? Math.floor(parts.length / 2) : 0;
  return (
    <div className={c.fig}>
      <p className={c.para}>{parts.map((p, i) => (i % 2 ? <mark key={i} className={c.found}>{p}</mark> : p))}</p>
      <label className={c.search}>
        <input value={q} onChange={(e) => setQ(e.target.value.slice(0, 20))} aria-label="Find in the paragraph" spellCheck="false" autoComplete="off" />
        <span>{n} {n === 1 ? 'match' : 'matches'}</span>
      </label>
    </div>
  );
}
