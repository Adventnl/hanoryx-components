import { useState } from 'react';
import c from './dials.module.css';

/* 9 */ export function PadlockRollers() {
  const [d, setD] = useState([2, 7, 1, 0]);
  const open = d.join('') === '2718';
  return (
    <div className={c.padlock} data-open={open}>
      <svg viewBox="0 0 40 30" aria-hidden="true"><path d="M8 28V14a12 12 0 0 1 24 0v3" /></svg>
      <div>{d.map((x, i) => <button type="button" key={i} aria-label={`Wheel ${i + 1}, ${x}`} onClick={() => setD(d.map((y, j) => (j === i ? (y + 1) % 10 : y)))}>{x}</button>)}</div>
    </div>
  );
}
