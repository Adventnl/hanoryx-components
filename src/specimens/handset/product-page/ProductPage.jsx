import { useState } from 'react';
import c from "../handset.module.css";
import { Phone } from "../shared";

/* 21 */ export function ProductPage() {
  const [size, setSize] = useState(1);
  const [n, setN] = useState(0);
  return (
    <Phone label="Product page">
      <span className={c.hero} />
      <div className={c.row}><b className={c.h}>Trail shell</b><span className={c.price}>$98</span></div>
      <div className={c.chips} role="group" aria-label="Size">{['S', 'M', 'L'].map((x, k) => <button key={x} type="button" className={c.chip} aria-pressed={size === k} onClick={() => setSize(k)}>{x}</button>)}</div>
      <button type="button" className={c.btn} onClick={() => setN((v) => v + 1)}>{n ? `In bag · ${n}` : 'Add to bag'}</button>
    </Phone>
  );
}
