import { useState } from 'react';
import c from "../checkout.module.css";
import { Co } from "../shared";

/* 33 */ export function OrderConfirmed() {
  const [n, setN] = useState(1);
  return (
    <Co label="Order confirmed" className={c.center}>
      <button type="button" className={c.okring} aria-label="Replay" onClick={() => setN((v) => v + 1)}><svg key={n} viewBox="0 0 52 52"><circle cx="26" cy="26" r="22" pathLength="1" /><path d="M15 27l8 8 14-16" pathLength="1" /></svg></button>
      <b>Order confirmed</b><small className={c.m}>No. 0417 · email sent</small>
    </Co>
  );
}
