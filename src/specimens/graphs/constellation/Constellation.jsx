import { useState } from 'react';
import { rng, clamp } from "../../../stage/hooks";
import c from "../graphs.module.css";

/* 35 */ const STARS = (() => { const r = rng(35); return Array.from({ length: 26 }, () => [6 + r() * 88, 6 + r() * 58]); })();

export function Constellation() {
  const [p, setP] = useState(null);
  const near = p ? STARS.map(([x, y], i) => ({ i, d: Math.hypot(x - p[0], y - p[1]) })).sort((a, b) => a.d - b.d).slice(0, 4) : [];
  const move = (e) => { const r = e.currentTarget.getBoundingClientRect(); setP([((e.clientX - r.left) / r.width) * 100, ((e.clientY - r.top) / r.height) * 70]); };
  return (
    <div className={c.fig}>
      <div className={c.scanBox} role="application" aria-label="Constellation, move over it to join the nearest stars" tabIndex={0} style={{ touchAction: 'pan-y' }} onPointerMove={move} onPointerLeave={(e) => { if (e.pointerType === 'mouse') setP(null); }} onBlur={() => setP(null)}
        onKeyDown={(e) => { const d = { ArrowLeft: [-6, 0], ArrowRight: [6, 0], ArrowUp: [0, -6], ArrowDown: [0, 6] }[e.key]; if (d) { e.preventDefault(); setP((q) => { const b = q || [50, 35]; return [clamp(b[0] + d[0], 0, 100), clamp(b[1] + d[1], 0, 70)]; }); } }}>
        <svg className={c.svg} viewBox="0 0 100 70" aria-hidden="true">
          {p && near.map((n) => <line key={n.i} className={c.edge} data-hot x1={p[0]} y1={p[1]} x2={STARS[n.i][0]} y2={STARS[n.i][1]} />)}
          {STARS.map(([x, y], i) => <circle key={i} className={c.nd} data-hot={near.some((n) => n.i === i)} cx={x} cy={y} r="1.4" />)}
        </svg>
      </div>
    </div>
  );
}
