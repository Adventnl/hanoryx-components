import { useState } from 'react';
import { clamp } from '../../stage/hooks';
import c from './faders.module.css';

/* 34 */ export function TripleThumb() {
  const [p, setP] = useState([0.2, 0.5, 0.8]);
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = clamp((e.clientX - r.left) / r.width);
    setP((cur) => {
      const k = cur.reduce((best, q, i) => (Math.abs(q - x) < Math.abs(cur[best] - x) ? i : best), 0);
      return cur.map((q, i) => (i === k ? x : q)).sort((a, b) => a - b);
    });
  };
  return (
    <div className={c.triple} role="group" aria-label="Three thumbs" style={{ touchAction: 'none' }}
      onPointerDown={(e) => { e.currentTarget.setPointerCapture?.(e.pointerId); move(e); }}
      onPointerMove={(e) => { if (e.currentTarget.hasPointerCapture?.(e.pointerId)) move(e); }}>
      <u style={{ left: `${p[0] * 100}%`, right: `${(1 - p[2]) * 100}%` }} />
      {p.map((q, i) => <i key={i} style={{ left: `${q * 100}%` }} data-mid={i === 1} />)}
    </div>
  );
}
