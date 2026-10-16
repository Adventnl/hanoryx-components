import { useState } from 'react';
import c from './graphs.module.css';

/* 37 */ const RINGS = [4, 7, 5, 9, 6, 8, 4, 7];

const RING_EDGES = RINGS.reduce((acc, w) => [...acc, acc[acc.length - 1] + w], [0]);

export function TreeRings() {
  const [i, setI] = useState(-1);
  const at = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const dist = Math.hypot(((e.clientX - r.left) / r.width - 0.5) * 100, ((e.clientY - r.top) / r.height - 0.5) * 100);
    const k = RING_EDGES.findIndex((edge, idx) => idx > 0 && dist < (edge / RING_EDGES[RING_EDGES.length - 1]) * 48);
    setI(k < 0 ? -1 : k - 1);
  };
  return (
    <div className={c.fig}>
      <div className={c.ringBox} role="slider" tabIndex={0} aria-label="Tree rings, move across them to read the years" aria-valuemin={0} aria-valuemax={RINGS.length} aria-valuenow={i + 1} aria-valuetext={i < 0 ? 'none' : `Year ${i + 1}`} style={{ touchAction: 'pan-y' }}
        onPointerMove={at} onPointerLeave={(e) => { if (e.pointerType === 'mouse') setI(-1); }} onBlur={() => setI(-1)} onKeyDown={(e) => { if (e.key === 'ArrowRight' || e.key === 'ArrowUp') { e.preventDefault(); setI((v) => Math.min(RINGS.length - 1, v + 1)); } if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') { e.preventDefault(); setI((v) => Math.max(0, v - 1)); } }}>
        <svg viewBox="0 0 100 100" aria-hidden="true">
          {RINGS.map((w, k) => <circle key={k} className={c.tree} data-hot={k === i} cx="50" cy="50" r={((RING_EDGES[k + 1]) / RING_EDGES[RING_EDGES.length - 1]) * 48 - (w / RING_EDGES[RING_EDGES.length - 1]) * 24} style={{ strokeWidth: (w / RING_EDGES[RING_EDGES.length - 1]) * 48 }} />)}
        </svg>
      </div>
      <p className={c.sub}>{i < 0 ? 'Move across the rings' : <>year <b>{i + 1}</b> · width {RINGS[i]}</>}</p>
    </div>
  );
}
