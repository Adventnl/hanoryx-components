import { useState } from 'react';
import c from "../checkout.module.css";
import { $, Co, Step } from "../shared";

/* 15 */ export function CartLines() {
  const [q, setQ] = useState([1, 2]);
  const P = [['Trail shell', 98], ['Wool socks', 12]];
  return (
    <Co label="Cart lines" className={c.list}>
      {P.map(([t, p], k) => <div key={t} className={c.line}><span>{t}<small>{$(p)}</small></span><Step v={q[k]} set={(v) => setQ((a) => a.map((x, i) => (i === k ? v : x)))} min={0} max={5} label={t} /><b>{$(p * q[k])}</b></div>)}
      <div className={c.sum}><span>Subtotal</span><b>{$(q[0] * 98 + q[1] * 12)}</b></div>
    </Co>
  );
}
