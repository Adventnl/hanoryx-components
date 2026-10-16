import { useState } from 'react';
import c from './switchboard.module.css';

/* 10 */ export function Breaker() {
  const [n, setN] = useState(0);
  const label = ['ON', 'TRIPPED', 'OFF'][n];
  return (
    <button type="button" className={c.breaker} data-s={n} aria-label={`Breaker, ${label}. Press to change`} onClick={() => setN((n + 1) % 3)}>
      <i /><span>{label}</span>
    </button>
  );
}
