import { useState } from 'react';
import c from "../boards.module.css";
import { Bd, DAYS } from "../shared";

/* 13 */ export function DayChooser() {
  const [d, setD] = useState(2);
  return (
    <Bd label="Week strip" className={c.center}>
      <div className={c.weekS} role="group" aria-label="Days">{DAYS.map((x, k) => <button key={k} type="button" aria-pressed={d === k} onClick={() => setD(k)}><small>{x}</small><b>{12 + k}</b></button>)}</div>
      <small className={c.m}>{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][d]} {12 + d} Oct · {d % 3 + 1} events</small>
    </Bd>
  );
}
