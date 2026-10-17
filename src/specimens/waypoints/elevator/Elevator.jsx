import { useState } from 'react';
import c from "../waypoints.module.css";

/* 41 */ export function Elevator() {
  const [k, setK] = useState(2);
  return (
    <div className={c.lift}>
      <div className={c.shaft} style={{ '--k': k }} aria-hidden="true"><i /></div>
      <div role="radiogroup" aria-label="Floor">{[4, 3, 2, 1, 0].map((f) => <button key={f} type="button" role="radio" aria-checked={f === k} onClick={() => setK(f)}>{f === 0 ? 'G' : f}</button>)}</div>
    </div>
  );
}
