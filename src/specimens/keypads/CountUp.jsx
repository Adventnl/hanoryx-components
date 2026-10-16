import { useState } from 'react';
import c from './keypads.module.css';

/* 32 */ export function CountUp() {
  const [n, setN] = useState(7);
  return (
    <button type="button" className={c.count} aria-label={`Count ${n}, add one`} onClick={() => setN(n + 1)}>
      <span key={n}>{n}</span><i>+1</i>
    </button>
  );
}
