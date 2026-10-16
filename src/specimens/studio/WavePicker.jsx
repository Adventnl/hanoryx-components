import { useState } from 'react';
import c from './studio.module.css';

/* 24 */ export function WavePicker() {
  const shapes = ['M2 20C8 2 14 2 20 20S32 38 38 20', 'M2 34 20 6 38 34', 'M2 34 22 6V34H38', 'M2 34V6H20V34H38'];
  const [k, setK] = useState(2);
  return <div className={c.osc} role="radiogroup" aria-label="Oscillator wave">{shapes.map((d, i) => <button key={i} type="button" role="radio" aria-checked={i === k} aria-label={['Sine', 'Triangle', 'Saw', 'Square'][i]} onClick={() => setK(i)}><svg viewBox="0 0 40 40" aria-hidden="true"><path d={d} /></svg></button>)}</div>;
}
