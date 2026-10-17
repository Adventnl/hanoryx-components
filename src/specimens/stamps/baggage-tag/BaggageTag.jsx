import { useState } from 'react';
import c from "../stamps.module.css";

/* 17 */ export function BaggageTag() {
  const [on, setOn] = useState(false);
  return (
    <button type="button" className={c.lug} aria-pressed={on} onClick={() => setOn((v) => !v)} aria-label="Flip the luggage tag">
      <span className={c.strap} />
      <span className={c.lugBody}>{on ? <><small>GATE</small><b>B12</b></> : <><small>TO</small><b>OSL</b></>}</span>
    </button>
  );
}
