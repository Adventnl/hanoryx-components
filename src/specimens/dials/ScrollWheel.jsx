import { useState } from 'react';
import c from './dials.module.css';

/* 28 */ export function ScrollWheel() {
  const [n, setN] = useState(0);
  return (
    <button type="button" className={c.scroll} style={{ '--n': n }} aria-label="Scroll wheel, click to notch" onClick={() => setN(n + 1)}>
      <i /><span>{n}</span>
    </button>
  );
}
