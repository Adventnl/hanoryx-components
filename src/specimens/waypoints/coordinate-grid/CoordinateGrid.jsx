import { useState } from 'react';
import { clamp } from "../../../stage/hooks";
import c from "../waypoints.module.css";

/* 26 */ export function CoordinateGrid() {
  const [p, setP] = useState(null);
  return (
    <div className={c.coords} onPointerMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); setP([((e.clientX - r.left) / r.width), ((e.clientY - r.top) / r.height)]); }} onPointerLeave={() => setP(null)} tabIndex={0} role="application" aria-label="Coordinate grid, move the pointer" onKeyDown={(e) => { const d = { ArrowLeft: [-0.1, 0], ArrowRight: [0.1, 0], ArrowUp: [0, -0.1], ArrowDown: [0, 0.1] }[e.key]; if (d) { e.preventDefault(); setP((q) => { const b = q || [0.5, 0.5]; return [clamp(b[0] + d[0]), clamp(b[1] + d[1])]; }); } }}>
      {p && <><i style={{ left: `${p[0] * 100}%` }} /><i style={{ top: `${p[1] * 100}%` }} data-h /></>}
      <output>{p ? `${(60 - p[1] * 6).toFixed(2)}°N ${(p[0] * 12).toFixed(2)}°E` : 'Hover the grid'}</output>
    </div>
  );
}
