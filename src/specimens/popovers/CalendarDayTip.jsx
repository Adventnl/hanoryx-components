import { useState } from 'react';
import c from './popovers.module.css';

/* 31 */ export function CalendarDayTip() {
  const [k, setK] = useState(-1);
  const ev = { 3: 'Review · 10:00', 7: 'Launch · all day', 12: 'Offsite' };
  return (
    <div className={c.cal} onPointerLeave={() => setK(-1)}>
      {Array.from({ length: 14 }, (_, i) => <button key={i} type="button" aria-label={`Day ${i + 1}${ev[i] ? `, ${ev[i]}` : ''}`} data-ev={Boolean(ev[i])} onPointerEnter={() => setK(i)} onFocus={() => setK(i)} onBlur={() => setK(-1)}>{i + 1}{k === i && ev[i] && <em>{ev[i]}</em>}</button>)}
    </div>
  );
}
