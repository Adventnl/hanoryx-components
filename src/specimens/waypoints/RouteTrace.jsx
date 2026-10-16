import { useState } from 'react';
import c from './waypoints.module.css';

/* 14 */ export function RouteTrace() {
  const [trail, setTrail] = useState([1, 4]);
  const grid = Array.from({ length: 12 }, (_, k) => k);
  return (
    <div className={c.trace} role="group" aria-label="Trace your route">
      {grid.map((k) => <button key={k} type="button" aria-pressed={trail.includes(k)} aria-label={`Waypoint ${k + 1}`} onClick={() => setTrail((t) => (t.includes(k) ? t.filter((x) => x !== k) : [...t, k]))}><i data-n={trail.indexOf(k) + 1 || undefined} /></button>)}
      <output>{trail.length} stops</output>
    </div>
  );
}
