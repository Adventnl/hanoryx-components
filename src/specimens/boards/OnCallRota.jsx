import { useState } from 'react';
import c from './boards.module.css';
import { Bd } from './shared';

/* 33 */ export function OnCallRota() {
  const [i, setI] = useState(1);
  const P = ['Ana', 'Kofi', 'Mara', 'Ravi'];
  return (
    <Bd label="Rota" className={c.center}>
      <small className={c.m}>On call</small>
      <div className={c.rota}>{P.map((p, k) => <span key={p} data-on={k === i}>{p}</span>)}</div>
      <button type="button" className={c.add} onClick={() => setI((v) => (v + 1) % 4)}>Hand over</button>
    </Bd>
  );
}
