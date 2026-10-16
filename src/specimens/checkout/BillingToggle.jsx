import { useState } from 'react';
import c from './checkout.module.css';
import { Co } from './shared';

/* 02 */ export function BillingToggle() {
  const [y, setY] = useState(false);
  return (
    <Co label="Billing period" className={c.center}>
      <div className={c.seg} role="group" aria-label="Period"><button type="button" aria-pressed={!y} onClick={() => setY(false)}>Monthly</button><button type="button" aria-pressed={y} onClick={() => setY(true)}>Yearly</button></div>
      <b className={c.big}>{y ? '$24' : '$29'}<small>/mo</small></b>
      <small className={c.save}>{y ? 'Save $60 a year' : 'Switch to save 17%'}</small>
    </Co>
  );
}
