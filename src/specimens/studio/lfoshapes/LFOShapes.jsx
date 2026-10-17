import { useState } from 'react';
import c from "../studio.module.css";

/* 23 */ export function LFOShapes() {
  const shapes = [['Sine', 'M0 20C10 -4 20 -4 30 20S50 44 60 20'], ['Tri', 'M0 20 15 4 45 36 60 20'], ['Saw', 'M0 36 30 4V36L60 4'], ['Square', 'M0 36V6H30V36H60V6']];
  const [k, setK] = useState(0);
  return (
    <div className={c.lfo}>
      <svg viewBox="0 0 60 40" aria-hidden="true"><path d={shapes[k][1]} /><circle r="2" className={c.runner}><animateMotion dur="2.4s" repeatCount="indefinite" path={shapes[k][1]} /></circle></svg>
      <div role="radiogroup" aria-label="LFO shape">{shapes.map(([n], i) => <button key={n} type="button" role="radio" aria-checked={i === k} onClick={() => setK(i)}>{n}</button>)}</div>
    </div>
  );
}
