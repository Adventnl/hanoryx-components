import { useState } from 'react';
import { clamp } from "../../../stage/hooks";
import { curve, pts } from "../../../stage/chartKit";
import c from "../waypoints.module.css";

const PROFILE = Array.from({ length: 24 }, (_, i) => 0.2 + 0.5 * Math.abs(Math.sin(i / 4)) + 0.2 * Math.sin(i / 1.6) ** 2);

/* 28 */ export function ElevationProfile() {
  const [k, setK] = useState(10);
  const p = pts(PROFILE, 100, 40, 4);
  return (
    <div className={c.elev}>
      <svg viewBox="0 0 100 40" aria-hidden="true" onPointerMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); setK(clamp(Math.round(((e.clientX - r.left) / r.width) * 23), 0, 23)); }}>
        <path d={`${curve(p)}L100 40L0 40Z`} className={c.eFill} /><path d={curve(p)} className={c.eLine} />
        <line x1={p[k][0]} x2={p[k][0]} y1={p[k][1]} y2="40" className={c.eMark} /><circle cx={p[k][0]} cy={p[k][1]} r="2" className={c.eDot} />
      </svg>
      <input type="range" min="0" max="23" value={k} onChange={(e) => setK(Number(e.target.value))} aria-label="Position on the profile" />
      <output>{Math.round(PROFILE[k] * 1200)} m</output>
    </div>
  );
}
