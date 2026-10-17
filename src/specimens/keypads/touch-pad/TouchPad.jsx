import { useState } from 'react';
import c from "../keypads.module.css";

/* 13 */ export function TouchPad() {
  const [p, setP] = useState({ x: 0.5, y: 0.5, on: false });
  const move = (e) => { const r = e.currentTarget.getBoundingClientRect(); setP({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height, on: true }); };
  return <div className={c.touch} role="application" aria-label="Touch pad" tabIndex={0} onPointerMove={move} onPointerLeave={() => setP((q) => ({ ...q, on: false }))} style={{ '--tx': p.x, '--ty': p.y }} data-on={p.on}><i /></div>;
}
