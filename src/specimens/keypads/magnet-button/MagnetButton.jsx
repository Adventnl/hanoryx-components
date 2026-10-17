import { useState } from 'react';
import c from "../keypads.module.css";

/* 18 */ export function MagnetButton() {
  const [p, setP] = useState({ x: 0, y: 0 });
  return (
    <div className={c.magnetZone} onPointerMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); setP({ x: (e.clientX - r.left - r.width / 2) * 0.25, y: (e.clientY - r.top - r.height / 2) * 0.35 }); }} onPointerLeave={() => setP({ x: 0, y: 0 })}>
      <button type="button" style={{ transform: `translate(${p.x}px, ${p.y}px)` }}>Attract</button>
    </div>
  );
}
