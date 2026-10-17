import { useState } from 'react';
import c from "../boards.module.css";
import { Bd } from "../shared";

/* 10 */ export function Assignees() {
  const [on, setOn] = useState([0]);
  const P = ['A', 'K', 'M', 'R'];
  return (
    <Bd label="Assignees" className={c.center}>
      <span className={c.cd}>Launch page</span>
      <div className={c.avRow} role="group" aria-label="People">{P.map((p, k) => <button key={p} type="button" aria-pressed={on.includes(k)} aria-label={`Assign ${p}`} style={{ '--h': k * 80 }} onClick={() => setOn((a) => (a.includes(k) ? a.filter((x) => x !== k) : [...a, k]))}>{p}</button>)}</div>
      <small className={c.m}>{on.length} assigned</small>
    </Bd>
  );
}
