import { useState } from 'react';
import c from "../checkout.module.css";
import { $, Co } from "../shared";

/* 39 */ export function TipChips() {
  const [t, setT] = useState(15);
  return (
    <Co label="Tip" className={c.center}>
      <span className={c.m}>Bill $64</span>
      <div className={c.chips} role="group" aria-label="Tip">{[0, 10, 15, 20].map((v) => <button key={v} type="button" className={c.chip} aria-pressed={t === v} onClick={() => setT(v)}>{v}%</button>)}</div>
      <b className={c.big}>{$(64 * (1 + t / 100))}</b>
    </Co>
  );
}
