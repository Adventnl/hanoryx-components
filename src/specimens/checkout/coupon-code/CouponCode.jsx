import { useState } from 'react';
import c from "../checkout.module.css";
import { Co } from "../shared";

/* 09 */ export function CouponCode() {
  const [v, setV] = useState('');
  const ok = v.toUpperCase() === 'WELCOME10';
  return (
    <Co label="Coupon" className={c.list}>
      <div className={c.sum}><span>Subtotal</span><b>$120</b></div>
      <label className={c.field}><input value={v} onChange={(e) => setV(e.target.value)} placeholder="Code (try WELCOME10)" aria-label="Coupon code" /></label>
      {ok && <div className={c.sum}><span>Discount</span><b className={c.green}>−$12</b></div>}
      <div className={c.sum}><span>Total</span><b>{ok ? '$108' : '$120'}</b></div>
    </Co>
  );
}
