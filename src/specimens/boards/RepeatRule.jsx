import { useState } from 'react';
import c from './boards.module.css';
import { Bd } from './shared';

/* 26 */ export function RepeatRule() {
  const [r, setR] = useState(1);
  const R = [['Daily', 'Oct 15, 16, 17'], ['Weekly', 'Oct 15, 22, 29'], ['Monthly', 'Oct 15, Nov 15, Dec 15']];
  return (
    <Bd label="Repeat" className={c.center}>
      <div className={c.chips} role="radiogroup" aria-label="Repeat">{R.map(([t], k) => <button key={t} type="button" role="radio" aria-checked={r === k} className={c.chip} aria-pressed={r === k} onClick={() => setR(k)}>{t}</button>)}</div>
      <small className={c.m}>{R[r][1]}</small>
    </Bd>
  );
}
