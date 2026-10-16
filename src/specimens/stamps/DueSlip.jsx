import { useState } from 'react';
import c from './stamps.module.css';
import { DATES, tilt } from './shared';

/* 25 */ export function DueSlip() {
  const [n, setN] = useState(2);
  return (
    <div className={c.slip}>
      <b>DATE DUE</b>
      {Array.from({ length: n }, (_, k) => <span key={k} style={{ '--r': tilt(k + 3, 2) }}>{DATES[k % 5]}</span>)}
      <button type="button" className={c.mini} disabled={n >= 5} onClick={() => setN((v) => v + 1)}>stamp</button>
    </div>
  );
}
