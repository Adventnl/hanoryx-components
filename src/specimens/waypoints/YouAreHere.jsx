import { useState } from 'react';
import c from './waypoints.module.css';

/* 9 */ export function YouAreHere() {
  const [at, setAt] = useState([4, 2]);
  return (
    <div className={c.here} role="grid" aria-label="Map, choose where you are">
      {Array.from({ length: 6 }, (_, r) => <div key={r} role="row">{Array.from({ length: 9 }, (_, k) => <button key={k} type="button" role="gridcell" aria-label={`Row ${r + 1}, column ${k + 1}`} aria-selected={at[0] === k && at[1] === r} onClick={() => setAt([k, r])} />)}</div>)}
      <i aria-hidden="true" style={{ '--x': at[0], '--y': at[1] }}><b>YOU ARE HERE</b></i>
    </div>
  );
}
