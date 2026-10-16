import { useState } from 'react';
import c from './boards.module.css';
import { Bd } from './shared';

/* 17 */ export function EventDots() {
  const [d, setD] = useState(6);
  const ev = { 3: 1, 6: 3, 9: 2, 12: 1, 15: 2 };
  return (
    <Bd label="Month with event dots" className={c.cal}>
      <div className={c.grid7}>{Array.from({ length: 21 }, (_, k) => k + 1).map((x) => <button key={x} type="button" aria-pressed={d === x} onClick={() => setD(x)}>{x}<s>{'•'.repeat(ev[x] ?? 0)}</s></button>)}</div>
      <small className={c.m}>{ev[d] ?? 0} events on the {d}th</small>
    </Bd>
  );
}
