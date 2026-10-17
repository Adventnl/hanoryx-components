import { useState } from 'react';
import c from "../cursors.module.css";

/* 19 */ export function DotPainter() {
  const [ds, setDs] = useState([]);
  const [down, setDown] = useState(false);
  const add = (e) => { const r = e.currentTarget.getBoundingClientRect(); setDs((a) => [...a.slice(-60), { x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100, h: (a.length * 9) % 360 }]); };
  return (
    <div className={`${c.area} ${c.paint}`} role="application" aria-label="Paint with dots; drag, then clear" tabIndex={0} onPointerDown={(e) => { setDown(true); add(e); }} onPointerMove={(e) => { if (down) add(e); }} onPointerUp={() => setDown(false)} onPointerLeave={() => setDown(false)} onKeyDown={(e) => { if (e.key === 'Backspace') setDs([]); }}>
      {ds.map((d, i) => <i key={i} style={{ left: `${d.x}%`, top: `${d.y}%`, '--h': d.h }} />)}
      <button type="button" onClick={() => setDs([])}>Clear</button>
    </div>
  );
}
