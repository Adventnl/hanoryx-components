import { useState } from 'react';
import c from './switchboard.module.css';

/* 25 */ export function ArmingSwitch() {
  const [n, setN] = useState(0);
  return (
    <div className={c.arm} style={{ '--n': n }} data-n={n} role="radiogroup" aria-label="Arming state">
      {['SAFE', 'ARM', 'FIRE'].map((t, i) => <button type="button" key={t} role="radio" aria-checked={n === i} onClick={() => setN(i)}>{t}</button>)}
      <i />
    </div>
  );
}
