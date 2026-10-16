import { useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './stamps.module.css';

/* 24 */ export function CouponCut() {
  const [cut, setCut] = useState(false);
  return (
    <button type="button" className={c.coupon} aria-pressed={cut} onClick={() => setCut((v) => !v)} aria-label="Cut out the coupon">
      <span className={c.cp}><b>20% OFF</b><small>CODE HX20</small></span>
      <Ico n="close" />
    </button>
  );
}
