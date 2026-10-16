import { useState } from 'react';
import c from './cockpit.module.css';

/* 24 */ export function SquawkCode() {
  const [d, setD] = useState([1, 2, 0, 0]);
  return (
    <div className={c.squawk} role="group" aria-label="Transponder code">
      {d.map((n, k) => <span key={k}><button type="button" aria-label={`Digit ${k + 1} up`} onClick={() => setD((a) => a.map((x, j) => (j === k ? (x + 1) % 8 : x)))}>▲</button><output>{n}</output><button type="button" aria-label={`Digit ${k + 1} down`} onClick={() => setD((a) => a.map((x, j) => (j === k ? (x + 7) % 8 : x)))}>▼</button></span>)}
    </div>
  );
}
