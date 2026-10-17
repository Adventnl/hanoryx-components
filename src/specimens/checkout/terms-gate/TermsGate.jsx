import { useState } from 'react';
import c from "../checkout.module.css";
import { Co } from "../shared";

/* 31 */ export function TermsGate() {
  const [a, setA] = useState(false);
  return (
    <Co label="Terms" className={c.list}>
      <button type="button" role="checkbox" aria-checked={a} className={c.line} onClick={() => setA((v) => !v)}><i>{a ? '✓' : ''}</i><span>I accept the terms</span></button>
      <button type="button" className={c.pay} disabled={!a}>Pay $120</button>
    </Co>
  );
}
