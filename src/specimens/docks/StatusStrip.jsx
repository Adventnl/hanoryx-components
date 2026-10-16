import { useState } from 'react';
import c from './docks.module.css';

/* 14 */ export function StatusStrip() {
  const [m, setM] = useState(0);
  const modes = ['NORMAL', 'INSERT', 'VISUAL'];
  return (
    <div className={c.status} role="status" aria-label="Status strip">
      <span>⎇ main</span><span>0 ✕ · 2 !</span><span>Ln 42, Col 7</span>
      <button type="button" aria-label={`Mode ${modes[m]}. Click to change`} onClick={() => setM((m + 1) % 3)} data-m={m}>{modes[m]}</button>
    </div>
  );
}
