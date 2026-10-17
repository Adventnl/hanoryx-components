import { useState } from 'react';
import c from "../studio.module.css";

/* 42 */ export function MarkerTimeline() {
  const [m, setM] = useState([18, 54, 82]);
  return (
    <div className={c.marks} role="application" aria-label="Timeline: click to drop a marker, press Backspace to clear" tabIndex={0} onClick={(e) => { const r = e.currentTarget.getBoundingClientRect(); setM((a) => [...a.slice(-5), ((e.clientX - r.left) / r.width) * 100]); }} onKeyDown={(e) => { if (e.key === 'Enter') setM((a) => [...a.slice(-5), 20 + (a.length * 17) % 60]); if (e.key === 'Backspace') setM([]); }}>
      {Array.from({ length: 25 }, (_, k) => <u key={k} data-big={k % 4 === 0} />)}
      {m.map((x, i) => <b key={`${i}-${Math.round(x)}`} style={{ left: `${x}%` }}><span>{i + 1}</span></b>)}
    </div>
  );
}
