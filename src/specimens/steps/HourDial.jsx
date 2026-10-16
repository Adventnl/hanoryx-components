import { useState } from 'react';
import c from './steps.module.css';

/* 34 */ export function HourDial() {
  const [h, setH] = useState(3);
  return (
    <div className={c.clock} role="radiogroup" aria-label="Hour">
      {Array.from({ length: 12 }, (_, k) => k + 1).map((n) => <button key={n} type="button" role="radio" aria-checked={n === h} style={{ '--a': n * 30 }} onClick={() => setH(n)}>{n}</button>)}
      <i style={{ '--a': h * 30 }} aria-hidden="true" />
    </div>
  );
}
