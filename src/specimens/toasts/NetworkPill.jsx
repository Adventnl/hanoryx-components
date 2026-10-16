import { useState } from 'react';
import c from './toasts.module.css';

/* 30 */ export function NetworkPill() {
  const [k, setK] = useState(0);
  const st = [['Online', 'ok'], ['Slow', 'warn'], ['Offline', 'bad']];
  return (
    <button type="button" className={c.pill} data-t={st[k][1]} aria-label={`Network ${st[k][0]}. Click to change`} onClick={() => setK((k + 1) % 3)}><i aria-hidden="true" />{st[k][0]}</button>
  );
}
