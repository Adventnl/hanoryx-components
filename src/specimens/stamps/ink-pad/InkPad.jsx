import { useState } from 'react';
import c from "../stamps.module.css";

/* 37 */ export function InkPad() {
  const [n, setN] = useState(0);
  return (
    <button type="button" className={c.inkpad} onClick={() => setN((v) => v + 1)} aria-label="Ink the stamp and press">
      <span className={c.pad} />
      <span className={c.paperBit} />
      <i key={n} className={c.lift} data-go={n > 0} />
      {n > 0 && <b key={`m${n}`} className={c.mark2}>PAID</b>}
    </button>
  );
}
