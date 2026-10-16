import { useState } from 'react';
import c from './fields.module.css';

/* 10 */ export function DatePicker() {
  const [d, setD] = useState(14);
  return (
    <div className={c.cal}>
      <header><b>SAMPLE MONTH</b><output>{d} / 30</output></header>
      <div>{['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((x, i) => <span key={i}>{x}</span>)}
        {Array.from({ length: 2 }, (_, i) => <i key={`b${i}`} />)}
        {Array.from({ length: 30 }, (_, i) => <button type="button" key={i} aria-pressed={d === i + 1} aria-label={`Day ${i + 1}`} onClick={() => setD(i + 1)}>{i + 1}</button>)}</div>
    </div>
  );
}
