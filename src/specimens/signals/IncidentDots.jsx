import { useState } from 'react';
import c from './signals.module.css';

/* 36 */ export function IncidentDots() {
  const evs = [['14:02', 'bad', 'Outage'], ['14:11', 'warn', 'Mitigating'], ['14:35', 'ok', 'Resolved']];
  const [k, setK] = useState(1);
  return (
    <div className={c.inc}>
      <ol>{evs.map(([t, s, n], i) => <li key={t}><button type="button" data-t={s} aria-current={i === k ? 'true' : undefined} aria-label={`${t} ${n}`} onClick={() => setK(i)} /></li>)}</ol>
      <output>{evs[k][0]} — {evs[k][2]}</output>
    </div>
  );
}
