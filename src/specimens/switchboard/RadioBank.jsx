import { useState } from 'react';
import c from './switchboard.module.css';

/* 20 */ export function RadioBank() {
  const [k, setK] = useState(1);
  return (
    <div className={c.bank} role="radiogroup" aria-label="Interlocked keys">
      {['AM', 'FM', 'SW', 'LW'].map((t, i) => <button type="button" key={t} role="radio" aria-checked={k === i} onClick={() => setK(i)}>{t}</button>)}
    </div>
  );
}
