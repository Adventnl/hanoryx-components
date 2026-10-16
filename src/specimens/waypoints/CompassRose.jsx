import { useState } from 'react';
import c from './waypoints.module.css';

/* 7 */ export function CompassRose() {
  const [k, setK] = useState(1);
  const marks = [['Cairn', 0], ['Lake', 80], ['Ridge', 160], ['Hut', 250]];
  return (
    <div className={c.rose}>
      <div className={c.roseFace}><i style={{ '--a': marks[k][1] }} aria-hidden="true" />{['N', 'E', 'S', 'W'].map((d, i) => <b key={d} style={{ '--a': i * 90 }}>{d}</b>)}</div>
      <div role="radiogroup" aria-label="Waypoint">{marks.map(([t], i) => <button key={t} type="button" role="radio" aria-checked={i === k} onClick={() => setK(i)}>{t}</button>)}</div>
    </div>
  );
}
