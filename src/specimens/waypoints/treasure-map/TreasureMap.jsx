import { useState } from 'react';
import c from "../waypoints.module.css";

/* 33 */ export function TreasureMap() {
  const [x, setX] = useState([[22, 60], [48, 36]]);
  return (
    <div className={c.treasure} role="application" aria-label="Treasure map, click to add a mark" onClick={(e) => { const r = e.currentTarget.getBoundingClientRect(); setX((a) => [...a.slice(-3), [((e.clientX - r.left) / r.width) * 100, ((e.clientY - r.top) / r.height) * 100]]); }} tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter') setX((a) => [...a.slice(-3), [20 + a.length * 17, 30 + (a.length % 2) * 30]]); if (e.key === 'Backspace') setX([]); }}>
      <svg viewBox="0 0 100 70" preserveAspectRatio="none" aria-hidden="true"><path d={x.map(([a, b], i) => `${i ? 'L' : 'M'}${a} ${b * 0.7}`).join('')} className={c.tPath} /></svg>
      {x.map(([a, b], i) => <b key={`${i}-${a}`} style={{ left: `${a}%`, top: `${b}%` }}>{i === x.length - 1 ? '✕' : '·'}</b>)}
    </div>
  );
}
