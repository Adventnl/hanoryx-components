import { useState } from 'react';
import c from "../checkout.module.css";
import { Co } from "../shared";

/* 36 */ export function RefundReason() {
  const [r, setR] = useState(-1);
  const R = ['Too small', 'Wrong item', 'Late', 'Changed mind'];
  return (
    <Co label="Refund reason" className={c.center}>
      <div className={c.chips} role="radiogroup" aria-label="Reason">{R.map((t, k) => <button key={t} type="button" role="radio" aria-checked={r === k} className={c.chip} aria-pressed={r === k} onClick={() => setR(k)}>{t}</button>)}</div>
      <button type="button" className={c.pay} disabled={r < 0}>{r < 0 ? 'Choose a reason' : 'Request refund'}</button>
    </Co>
  );
}
