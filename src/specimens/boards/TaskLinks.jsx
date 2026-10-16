import { useState } from 'react';
import c from './boards.module.css';
import { Bd } from './shared';

/* 21 */ export function TaskLinks() {
  const [s, setS] = useState(0);
  const N = ['Spec', 'API', 'UI', 'Ship'];
  return (
    <Bd label="Dependencies" className={c.deps}>
      <svg viewBox="0 0 110 60" aria-hidden="true"><path d="M20 14H40V30H60M60 30V46H80M40 30V14M20 14L40 30" /><path d="M24 14C36 14 36 30 46 30M64 30C76 30 76 46 86 46" /></svg>
      {N.map((t, k) => <button key={t} type="button" aria-pressed={s === k} data-done={k <= s} style={{ '--k': k }} onClick={() => setS(k)}>{t}</button>)}
    </Bd>
  );
}
