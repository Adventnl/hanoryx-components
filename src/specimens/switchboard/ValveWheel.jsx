import { useState } from 'react';
import c from './switchboard.module.css';

/* 39 */ export function ValveWheel() {
  const [n, setN] = useState(0);
  return (
    <button type="button" className={c.valve} data-open={n % 2 === 0} aria-label={`Valve wheel, ${n % 2 === 0 ? 'open' : 'shut'}`} onClick={() => setN(n + 1)}>
      <svg viewBox="0 0 60 60" aria-hidden="true" style={{ transform: `rotate(${n * 90}deg)` }}><circle cx="30" cy="30" r="22" /><path d="M30 8v44M8 30h44" /><circle cx="30" cy="30" r="5" /></svg>
      <span>{n % 2 === 0 ? 'OPEN' : 'SHUT'}</span>
    </button>
  );
}
