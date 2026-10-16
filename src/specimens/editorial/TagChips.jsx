import { useState } from 'react';
import c from './editorial.module.css';

/* ---------- 05 the rest of the page ---------- */

const TAGS = ['belts', 'platforms', 'tea', 'timetables', 'gates'];

export function TagChips() {
  const [on, setOn] = useState(() => new Set(['tea']));
  const toggle = (t) => setOn((s) => {
    const n = new Set(s);
    if (n.has(t)) n.delete(t); else n.add(t);
    return n;
  });
  return (
    <div className={c.fig}>
      <div className={c.tags}>
        {TAGS.map((t) => <button key={t} type="button" className={c.tag} aria-pressed={on.has(t)} onClick={() => toggle(t)}>{t}</button>)}
      </div>
      <p className={c.note}>{on.size} selected</p>
    </div>
  );
}
