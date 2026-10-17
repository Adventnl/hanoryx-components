import { useState } from 'react';
import c from "../boards.module.css";
import { Bd } from "../shared";

/* 01 */ export function SingleLane() {
  const [n, setN] = useState(3);
  return (
    <Bd label="One lane" className={c.one}>
      <b className={c.lh}>Doing <small>{n}</small></b>
      {Array.from({ length: n }, (_, k) => <span key={k} className={c.cd}>Task {k + 1}</span>)}
      <button type="button" className={c.add} onClick={() => setN((v) => (v >= 5 ? 2 : v + 1))}>+ Add</button>
    </Bd>
  );
}
