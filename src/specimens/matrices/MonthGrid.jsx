import { useState } from 'react';
import c from './matrices.module.css';

/* 29 */ const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function MonthGrid() {
  const [m, setM] = useState(9);
  const [day, setDay] = useState(14);
  const lead = new Date(2026, m, 1).getDay();
  const days = new Date(2026, m + 1, 0).getDate();
  return (
    <div className={c.month}>
      <p>
        <button type="button" aria-label="Previous month" onClick={() => setM((v) => (v + 11) % 12)}>‹</button>
        <b>{MONTHS[m]} 2026</b>
        <button type="button" aria-label="Next month" onClick={() => setM((v) => (v + 1) % 12)}>›</button>
      </p>
      <div>
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => <em key={i}>{d}</em>)}
        {Array.from({ length: lead }, (_, i) => <u key={`l${i}`} />)}
        {Array.from({ length: days }, (_, i) => <button key={i} type="button" aria-label={`${MONTHS[m]} ${i + 1}`} aria-pressed={day === i + 1} onClick={() => setDay(i + 1)}>{i + 1}</button>)}
      </div>
    </div>
  );
}
