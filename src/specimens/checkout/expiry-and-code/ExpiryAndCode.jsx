import { useState } from 'react';
import c from "../checkout.module.css";
import { Co } from "../shared";

/* 29 */ export function ExpiryAndCode() {
  const [e, setE] = useState('');
  const [cv, setCv] = useState('');
  const fmt = (s) => { const d = s.replace(/\D/g, '').slice(0, 4); return d.length > 2 ? `${d.slice(0, 2)}/${d.slice(2)}` : d; };
  return (
    <Co label="Expiry and code" className={c.list}>
      <div className={c.two}><label className={c.field}><input value={e} onChange={(x) => setE(fmt(x.target.value))} placeholder="MM/YY" aria-label="Expiry" inputMode="numeric" /></label><label className={c.field}><input type="password" value={cv} onChange={(x) => setCv(x.target.value.replace(/\D/g, '').slice(0, 3))} placeholder="CVC" aria-label="Security code" inputMode="numeric" /></label></div>
      <small className={c.m}>{e.length === 5 && cv.length === 3 ? 'Looks complete' : 'Fill both'}</small>
    </Co>
  );
}
