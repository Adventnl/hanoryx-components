import { useState } from 'react';
import c from "../tabs.module.css";

/* 31 */ export function WeekStrip() {
  const [k, setK] = useState(2);
  return (
    <div className={c.week} role="tablist" aria-label="Days of the week">
      {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => <button key={i} type="button" role="tab" aria-selected={i === k} aria-label={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][i]} data-today={i === 3} onClick={() => setK(i)}><span>{d}</span><b>{12 + i}</b></button>)}
    </div>
  );
}
