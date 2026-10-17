import { useState } from 'react';
import c from "../checkout.module.css";
import { Co } from "../shared";

/* 11 */ export function PriceDrop() {
  const [on, setOn] = useState(true);
  return (
    <Co label="Price drop" className={c.center}>
      <div className={c.priceDrop}>{on && <s>$120</s>}<b className={c.big}>{on ? '$84' : '$120'}</b>{on && <em>−30%</em>}</div>
      <button type="button" className={c.chip} aria-pressed={on} onClick={() => setOn((v) => !v)}>Sale {on ? 'on' : 'off'}</button>
    </Co>
  );
}
