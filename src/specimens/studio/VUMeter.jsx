import { useState } from 'react';
import c from './studio.module.css';
import { useLevels } from './shared';

/* 1 */ export function VUMeter() {
  const [v] = useLevels(1, 180);
  const [hit, setHit] = useState(0);
  return (
    <button type="button" className={c.vu} onClick={() => setHit((h) => h + 1)} aria-label="VU meter. Press for a peak">
      <svg viewBox="0 0 100 62" aria-hidden="true"><path d="M10 52A46 46 0 0 1 90 52" className={c.arcBase} /><path d="M66 14A46 46 0 0 1 90 52" className={c.arcHot} /><text x="50" y="42" textAnchor="middle" className={c.vText}>VU</text><g className={c.needle} style={{ transform: `rotate(${-48 + (hit % 2 ? 0.98 : v) * 96}deg)` }}><path d="M49.2 62 50 14 50.8 62z" /></g><circle cx="50" cy="62" r="3" className={c.cap} /></svg>
    </button>
  );
}
