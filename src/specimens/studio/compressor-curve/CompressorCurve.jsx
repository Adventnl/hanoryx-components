import { useState } from 'react';
import c from "../studio.module.css";

/* 19 */ export function CompressorCurve() {
  const [r, setR] = useState(0.4);
  const ratio = 1 + r * 9;
  return (
    <div className={c.comp}>
      <svg viewBox="0 0 100 100" aria-hidden="true"><path d="M0 100 100 0" className={c.grid} /><path d={`M0 100 L50 50 L100 ${50 - 50 / ratio}`} className={c.trace} /><circle cx="50" cy="50" r="2.4" className={c.pt} /></svg>
      <label><span>Ratio {ratio.toFixed(1)}:1</span><input type="range" min="0" max="1" step="0.01" value={r} onChange={(e) => setR(Number(e.target.value))} aria-label="Ratio" /></label>
    </div>
  );
}
