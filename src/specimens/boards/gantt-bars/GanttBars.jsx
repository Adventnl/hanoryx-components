import { useState } from 'react';
import c from "../boards.module.css";
import { Bd } from "../shared";

/* 20 */ export function GanttBars() {
  const [s, setS] = useState(1);
  const T = [['Design', 0, 4], ['Build', 3, 8], ['Test', 7, 10], ['Launch', 10, 12]];
  return (
    <Bd label="Gantt bars" className={c.gantt}>
      {T.map(([t, a, b], k) => <div key={t}><small>{t}</small><button type="button" aria-pressed={s === k} aria-label={`${t}, weeks ${a + 1} to ${b}`} style={{ '--a': a, '--n': b - a }} onClick={() => setS(k)} /></div>)}
      <small className={c.m}>{T[s][0]} · weeks {T[s][1] + 1}–{T[s][2]}</small>
    </Bd>
  );
}
