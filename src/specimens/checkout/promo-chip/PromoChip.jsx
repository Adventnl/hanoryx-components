import { useState } from 'react';
import c from "../checkout.module.css";
import { Co } from "../shared";

/* 19 */ export function PromoChip() {
  const [on, setOn] = useState(true);
  return (
    <Co label="Applied promo" className={c.center}>
      {on ? <span className={c.tagP}>SPRING15<button type="button" aria-label="Remove promo" onClick={() => setOn(false)}>×</button></span> : <button type="button" className={c.chip} onClick={() => setOn(true)}>Add SPRING15</button>}
      <b className={c.big}>{on ? '$102' : '$120'}</b>
    </Co>
  );
}
