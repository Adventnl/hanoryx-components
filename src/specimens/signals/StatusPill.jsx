import { useState } from 'react';
import c from './signals.module.css';
import { STATES } from './shared';

/* 5 */ export function StatusPill() {
  const [k, setK] = useState(0);
  return <button type="button" className={c.pill} data-t={STATES[k][0]} aria-label={`${STATES[k][1]}. Press to change`} onClick={() => setK((k + 1) % 4)}><i />{STATES[k][1]}</button>;
}
