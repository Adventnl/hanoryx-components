import { useState } from 'react';
import c from './boards.module.css';
import { Bd } from './shared';

/* 41 */ export function ShiftRoster() {
  const [g, setG] = useState(() => Array.from({ length: 21 }, (_, k) => (k * 5) % 4));
  const P = ['·', 'A', 'K', 'M'];
  return (
    <Bd label="Shift roster" className={c.center}>
      <div className={c.roster}>{g.map((v, k) => <button key={k} type="button" data-v={v} aria-label={`Day ${(k % 7) + 1}, shift ${Math.floor(k / 7) + 1}: ${P[v]}`} onClick={() => setG((a) => a.map((x, i) => (i === k ? (x + 1) % 4 : x)))}>{P[v]}</button>)}</div>
    </Bd>
  );
}
