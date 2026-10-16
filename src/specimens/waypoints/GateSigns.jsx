import { useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './waypoints.module.css';

/* 23 */ export function GateSigns() {
  const [k, setK] = useState(0);
  const signs = [['A1–A12', 'left'], ['B1–B20', 'right'], ['Baggage', 'down'], ['Exit', 'up']];
  return (
    <div className={c.gate} role="radiogroup" aria-label="Gate signs">
      {signs.map(([t, d], i) => <button key={t} type="button" role="radio" aria-checked={i === k} onClick={() => setK(i)}><Ico n={d} /><span>{t}</span></button>)}
    </div>
  );
}
