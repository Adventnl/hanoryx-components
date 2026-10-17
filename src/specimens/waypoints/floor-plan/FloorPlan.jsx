import { useState } from 'react';
import c from "../waypoints.module.css";

/* 10 */ export function FloorPlan() {
  const [k, setK] = useState(2);
  const rooms = [['Lobby', 'M4 4h40v28H4z'], ['Atrium', 'M48 4h48v28H48z'], ['Studio', 'M4 36h56v28H4z'], ['Lab', 'M64 36h32v28H64z']];
  return (
    <div className={c.plan}>
      <svg viewBox="0 0 100 68" role="group" aria-label="Floor plan">
        {rooms.map(([t, d], i) => <path key={t} d={d} tabIndex={0} role="button" aria-pressed={i === k} aria-label={t} onClick={() => setK(i)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setK(i); } }} />)}
        <path className={c.route} d="M24 18 46 34 32 50" />
      </svg>
      <output>{rooms[k][0]}</output>
    </div>
  );
}
