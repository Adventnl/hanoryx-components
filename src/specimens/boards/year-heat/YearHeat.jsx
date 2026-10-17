import { useState } from 'react';
import c from "../boards.module.css";
import { Bd } from "../shared";

/* 18 */ export function YearHeat() {
  const [s, setS] = useState(-1);
  const v = (k) => ((k * 7919) % 11) / 10;
  return (
    <Bd label="Year heat grid" className={c.center}>
      <div className={c.heat}>{Array.from({ length: 12 * 7 }, (_, k) => <button key={k} type="button" aria-label={`Cell ${k + 1}`} aria-pressed={s === k} onClick={() => setS(k)} style={{ '--v': v(k) }} />)}</div>
      <small className={c.m}>{s < 0 ? 'Pick a day' : `${Math.round(v(s) * 10)} contributions`}</small>
    </Bd>
  );
}
