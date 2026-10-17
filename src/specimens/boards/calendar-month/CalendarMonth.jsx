import { useState } from 'react';
import c from "../boards.module.css";
import { Bd, DAYS } from "../shared";

/* 12 */ export function CalendarMonth() {
  const [d, setD] = useState(14);
  return (
    <Bd label="Month grid" className={c.cal}>
      <b className={c.mh}>October 2026</b>
      <div className={c.grid7}>{DAYS.map((x, i) => <small key={i}>{x}</small>)}{Array.from({ length: 31 }, (_, k) => <button key={k} type="button" aria-pressed={d === k + 1} aria-current={k + 1 === 15 ? 'date' : undefined} aria-label={`October ${k + 1}`} onClick={() => setD(k + 1)}>{k + 1}</button>)}</div>
    </Bd>
  );
}
