import { useState } from 'react';
import c from "../boards.module.css";
import { Bd, cx } from "../shared";

/* 04 */ export function LaneLimit() {
  const [n, setN] = useState(3);
  return (
    <Bd label="Lane with a limit" className={c.one}>
      <b className={c.lh}>Doing <small className={n > 3 ? c.over : ''}>{n}/3</small></b>
      {Array.from({ length: n }, (_, k) => <span key={k} className={cx(c.cd, k >= 3 && c.bad)}>Task {k + 1}</span>)}
      <div className={c.pair}><button type="button" className={c.add} onClick={() => setN((v) => Math.min(5, v + 1))}>+</button><button type="button" className={c.add} onClick={() => setN((v) => Math.max(0, v - 1))}>−</button></div>
    </Bd>
  );
}
