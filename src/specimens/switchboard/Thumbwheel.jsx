import { useState } from 'react';
import c from './switchboard.module.css';

/* 14 */ export function Thumbwheel() {
  const [n, setN] = useState(3);
  return (
    <div className={c.wheelBox}>
      <button type="button" aria-label="Decrease" onClick={() => setN((n + 9) % 10)}>−</button>
      <div className={c.win}><ol style={{ '--n': n }}>{Array.from({ length: 10 }, (_, d) => <li key={d}>{d}</li>)}</ol></div>
      <button type="button" aria-label="Increase" onClick={() => setN((n + 1) % 10)}>+</button>
    </div>
  );
}
