import { useState } from 'react';
import c from "../boards.module.css";
import { Bd } from "../shared";

/* 31 */ export function EstimateCards() {
  const [s, setS] = useState(3);
  const F = [1, 2, 3, 5, 8, 13];
  return (
    <Bd label="Estimate cards" className={c.center}>
      <div className={c.poker} role="radiogroup" aria-label="Estimate">{F.map((f, k) => <button key={f} type="button" role="radio" aria-checked={s === k} onClick={() => setS(k)}>{f}</button>)}</div>
      <small className={c.m}>{F[s]} points</small>
    </Bd>
  );
}
