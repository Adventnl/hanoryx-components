import { useState } from 'react';
import c from './checkout.module.css';
import { Co } from './shared';

/* 06 */ export function DifferencesOnly() {
  const [d, setD] = useState(true);
  const F = [['Seats', '1', '10'], ['Support', 'Email', 'Email'], ['History', '7 days', '90 days']];
  return (
    <Co label="Compare plans" className={c.list}>
      <button type="button" className={c.chip} aria-pressed={d} onClick={() => setD((v) => !v)}>Differences only</button>
      {F.filter(([, a, b]) => !d || a !== b).map(([t, a, b]) => <div key={t} className={c.cmp}><span>{t}</span><b>{a}</b><b>{b}</b></div>)}
    </Co>
  );
}
