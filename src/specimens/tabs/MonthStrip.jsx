import { useState } from 'react';
import c from './tabs.module.css';

/* 30 */ export function MonthStrip() {
  const [k, setK] = useState(4);
  const names = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
  const full = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return (
    <div className={c.months} role="tablist" aria-label="Months">
      {names.map((n, i) => <button key={i} type="button" role="tab" aria-selected={i === k} aria-label={full[i]} onClick={() => setK(i)}>{n}</button>)}
    </div>
  );
}
