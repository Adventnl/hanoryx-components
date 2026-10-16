import { useState } from 'react';
import c from './checkout.module.css';
import { Co } from './shared';

/* 26 */ export function AddressForm() {
  const [f, setF] = useState({ n: '', z: '' });
  const ok = f.n.length > 1 && /^\d{4,5}$/.test(f.z);
  return (
    <Co label="Address form" className={c.list}>
      <label className={c.field}><input value={f.n} onChange={(e) => setF({ ...f, n: e.target.value })} placeholder="Full name" aria-label="Full name" /></label>
      <label className={c.field}><input value={f.z} onChange={(e) => setF({ ...f, z: e.target.value })} placeholder="Postcode (4–5 digits)" aria-label="Postcode" inputMode="numeric" /></label>
      <button type="button" className={c.pay} disabled={!ok}>Ship here</button>
    </Co>
  );
}
