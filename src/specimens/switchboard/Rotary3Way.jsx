import { useState } from 'react';
import c from './switchboard.module.css';

/* 15 */ export function Rotary3Way() {
  const [n, setN] = useState(1);
  return (
    <button type="button" className={c.rotary} data-n={n} aria-label={`Selector, position ${'ABC'[n]}`} onClick={() => setN((n + 1) % 3)}>
      <b>A</b><b>B</b><b>C</b><i />
    </button>
  );
}
