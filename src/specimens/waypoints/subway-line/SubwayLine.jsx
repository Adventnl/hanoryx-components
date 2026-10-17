import { useState } from 'react';
import c from "../waypoints.module.css";

/* 11 */ export function SubwayLine() {
  const [k, setK] = useState(2);
  const stops = ['Quay', 'Mill', 'Court', 'Gate', 'Park'];
  return (
    <div className={c.metro} style={{ '--k': k }}>
      <ol>{stops.map((t, i) => <li key={t}><button type="button" aria-current={i === k ? 'true' : undefined} onClick={() => setK(i)}><i /><span>{t}</span></button></li>)}</ol>
      <b aria-hidden="true" />
    </div>
  );
}
