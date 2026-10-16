import { useState } from 'react';
import c from './wipes.module.css';

/* 40 */ export function ScrubbedWipe() {
  const [v, setV] = useState(0.35);
  return (
    <div className={c.scrub}>
      <div className={`${c.wipe} ${c.scrubw}`} style={{ '--v': v }}><span className={c.a}><b>A</b></span><span className={c.b}><b>B</b></span></div>
      <input type="range" min="0" max="1" step="0.01" value={v} onChange={(e) => setV(Number(e.target.value))} aria-label="Scrub the wipe" />
    </div>
  );
}
