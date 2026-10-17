import { useState } from 'react';
import c from "../cursors.module.css";

/* 36 */ export function Stamps() {
  const [st, setSt] = useState([]);
  const glyphs = ['✦', '★', '✿', '◆'];
  return (
    <div className={`${c.area} ${c.stamps}`} role="application" aria-label="Click to stamp" tabIndex={0} onPointerDown={(e) => { const r = e.currentTarget.getBoundingClientRect(); setSt((a) => [...a.slice(-8), { x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100, g: glyphs[a.length % 4], r: (a.length * 37) % 40 - 20 }]); }} onKeyDown={(e) => { if (e.key === 'Enter') setSt((a) => [...a.slice(-8), { x: 20 + ((a.length * 23) % 60), y: 30 + ((a.length * 17) % 40), g: glyphs[a.length % 4], r: 0 }]); }}>
      <span>Click to stamp</span>{st.map((s, i) => <b key={i} style={{ left: `${s.x}%`, top: `${s.y}%`, '--r': `${s.r}deg` }}>{s.g}</b>)}
    </div>
  );
}
