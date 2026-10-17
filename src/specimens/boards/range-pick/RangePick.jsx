import { useState } from 'react';
import c from "../boards.module.css";
import { Bd } from "../shared";

/* 16 */ export function RangePick() {
  const [r, setR] = useState([4, 8]);
  const pick = (d) => setR(([a, b]) => (a != null && b == null ? (d < a ? [d, a] : [a, d]) : [d, null]));
  return (
    <Bd label="Date range" className={c.cal}>
      <b className={c.mh}>{r[0]}{r[1] ? ` – ${r[1]}` : ''} Oct · {r[1] ? r[1] - r[0] + 1 : 1} days</b>
      <div className={c.grid7}>{Array.from({ length: 14 }, (_, k) => k + 1).map((d) => <button key={d} type="button" data-in={r[0] != null && d >= r[0] && d <= (r[1] ?? r[0])} aria-pressed={d === r[0] || d === r[1]} onClick={() => pick(d)}>{d}</button>)}</div>
    </Bd>
  );
}
