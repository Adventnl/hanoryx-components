import { useState } from 'react';
import { clamp } from '../../stage/hooks';
import c from './popovers.module.css';

/* 7 */ export function FollowingTip() {
  const [p, setP] = useState(null);
  return (
    <div className={c.follow} onPointerMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); setP([e.clientX - r.left, e.clientY - r.top]); }} onPointerLeave={() => setP(null)} tabIndex={0} role="application" aria-label="Move the pointer over the area; a tip follows it" onKeyDown={(e) => { const d = { ArrowLeft: [-16, 0], ArrowRight: [16, 0], ArrowUp: [0, -16], ArrowDown: [0, 16] }[e.key]; if (d) { e.preventDefault(); setP((q) => { const b = q || [80, 40]; return [clamp(b[0] + d[0], 0, 190), clamp(b[1] + d[1], 0, 90)]; }); } }}>
      <span>Move here</span>
      {p && <b style={{ left: p[0], top: p[1] }}>{Math.round(p[0])}, {Math.round(p[1])}</b>}
    </div>
  );
}
