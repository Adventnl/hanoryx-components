import { useState } from 'react';
import c from "../boards.module.css";
import { Bd } from "../shared";

/* 15 */ export function OverlapColumns() {
  const [s, setS] = useState(0);
  const E = [['Sync', 0, 2, 0], ['Design', 1, 3, 1], ['Lunch', 3, 4, 0], ['1:1', 2, 3, 0]];
  return (
    <Bd label="Overlapping events" className={c.overlap}>
      <div>{E.map(([t, a, b, col], k) => <button key={t} type="button" aria-pressed={s === k} style={{ '--a': a, '--b': b, '--col': col }} onClick={() => setS(k)}>{t}</button>)}</div>
      <small className={c.m}>{E[s][0]}</small>
    </Bd>
  );
}
