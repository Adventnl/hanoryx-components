import { useState } from 'react';
import c from './stamps.module.css';
import { DATES, tilt } from './shared';

/* 02 */ export function DateStamp() {
  const [n, setN] = useState(2);
  return (
    <button type="button" className={c.press} onClick={() => setN((v) => v + 1)} aria-label="Press the date stamp">
      <span className={c.dateStack}>
        {Array.from({ length: Math.min(3, n) }, (_, k) => { const id = n - k; return <b key={id} className={c.date} style={{ '--r': tilt(id, 3), opacity: 1 - k * 0.3 }}>{DATES[id % 5]}</b>; })}
      </span>
    </button>
  );
}
