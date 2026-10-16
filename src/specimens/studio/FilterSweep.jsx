import { useState } from 'react';
import c from './studio.module.css';

/* 25 */ export function FilterSweep() {
  const [x, setX] = useState(0.5);
  const [q, setQ] = useState(0.4);
  const bx = 15 + x * 70;
  return (
    <div className={c.filter}>
      <svg viewBox="0 0 100 60" aria-hidden="true"><path d={`M0 20 H${bx - 18} C${bx - 8} 20 ${bx - 6} ${24 - q * 22} ${bx} ${24 - q * 22} S${bx + 8} 56 ${bx + 20} 56 H100`} className={c.trace} /></svg>
      <div><input type="range" min="0" max="1" step="0.01" value={x} onChange={(e) => setX(Number(e.target.value))} aria-label="Cutoff" /><input type="range" min="0" max="1" step="0.01" value={q} onChange={(e) => setQ(Number(e.target.value))} aria-label="Resonance" /></div>
    </div>
  );
}
