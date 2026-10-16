import { useState } from 'react';
import c from './waypoints.module.css';

/* 12 */ export function TrailBlazes() {
  const [k, setK] = useState(1);
  const blazes = [['Left turn', 'M8 6v28h18'], ['Straight', 'M17 6v28'], ['Right turn', 'M26 6v28H8'], ['Fork', 'M17 34V16M17 16 8 6M17 16 26 6']];
  return (
    <div className={c.blaze} role="radiogroup" aria-label="Trail markers">
      {blazes.map(([t, d], i) => <button key={t} type="button" role="radio" aria-checked={i === k} aria-label={t} onClick={() => setK(i)}><svg viewBox="0 0 34 40" aria-hidden="true"><rect x="3" y="2" width="28" height="36" rx="4" /><path d={d} /></svg></button>)}
    </div>
  );
}
