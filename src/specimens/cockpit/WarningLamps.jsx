import { useState } from 'react';
import c from './cockpit.module.css';

/* 32 */ export function WarningLamps() {
  const [lit, setLit] = useState([false, true, false, false, false, true]);
  const names = ['LOW FUEL', 'OIL', 'VOLTS', 'DOOR', 'VAC', 'HEAT'];
  return (
    <div className={c.ann} role="group" aria-label="Warning lamps">
      {names.map((n, k) => <button key={n} type="button" aria-pressed={lit[k]} data-w={k % 2} onClick={() => setLit((a) => a.map((x, j) => (j === k ? !x : x)))}>{n}</button>)}
    </div>
  );
}
