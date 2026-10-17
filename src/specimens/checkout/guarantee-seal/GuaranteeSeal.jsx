import { useState } from 'react';
import c from "../checkout.module.css";
import { Co } from "../shared";

/* 13 */ export function GuaranteeSeal() {
  const [o, setO] = useState(false);
  return (
    <Co label="Guarantee" className={c.center}>
      <button type="button" className={c.seal} aria-expanded={o} onClick={() => setO((v) => !v)}><b>30</b><small>day</small></button>
      <span className={c.m}>{o ? 'Not happy? Full refund, no forms.' : 'Money-back guarantee'}</span>
    </Co>
  );
}
