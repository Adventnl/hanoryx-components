import { useState } from 'react';
import c from "../fields.module.css";

/* 40 */ export function CounterRing() {
  const [v, setV] = useState('Plan the next');
  const max = 40;
  const left = max - v.length;
  return (
    <div className={c.ring}>
      <input value={v} maxLength={max} aria-label="Limited text" onChange={(e) => setV(e.target.value)} />
      <svg viewBox="0 0 36 36" aria-hidden="true"><circle cx="18" cy="18" r="15" pathLength="1" /><circle className={c.arc} cx="18" cy="18" r="15" pathLength="1" style={{ strokeDasharray: `${v.length / max} 1` }} data-low={left < 8} /></svg>
      <output>{left}</output>
    </div>
  );
}
