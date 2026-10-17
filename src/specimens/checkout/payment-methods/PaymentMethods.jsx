import { useState } from 'react';
import c from "../checkout.module.css";
import { Co } from "../shared";

/* 30 */ export function PaymentMethods() {
  const [s, setS] = useState(0);
  const M = [['Card', 'Number, expiry, code'], ['Wallet', 'Confirm on your phone'], ['Bank', 'Choose your bank']];
  return (
    <Co label="Payment methods" className={c.list}>
      <div className={c.tabs} role="tablist" aria-label="Method">{M.map(([t], k) => <button key={t} type="button" role="tab" aria-selected={s === k} onClick={() => setS(k)}>{t}</button>)}</div>
      <p className={c.ans} role="tabpanel">{M[s][1]}</p>
    </Co>
  );
}
