import { useState } from 'react';
import c from './beams.module.css';

/* 42 */ export function PulseRings() {
  const [rs, setRs] = useState([{ id: 0, x: 50, y: 50 }]);
  const spawn = (x, y) => setRs((a) => [...a.slice(-3), { id: (a.at(-1)?.id ?? 0) + 1, x, y }]);
  return (
    <button type="button" className={c.sw} aria-label="Click to send a pulse ring"
      onClick={(e) => { const r = e.currentTarget.getBoundingClientRect(); const x = e.detail === 0 ? 50 : ((e.clientX - r.left) / r.width) * 100; const y = e.detail === 0 ? 50 : ((e.clientY - r.top) / r.height) * 100; spawn(x, y); }}>
      {rs.map((r) => <i key={r.id} className={c.ring} style={{ left: `${r.x}%`, top: `${r.y}%` }} />)}
      <b className={c.flare} /><span className={c.hint}>CLICK</span>
    </button>
  );
}
