import { useState } from 'react';
import c from './checkout.module.css';
import { Co } from './shared';

/* 35 */ export function InvoiceRows() {
  const [s, setS] = useState([0, 1, 2]);
  const C = [['Paid', '#4ade80'], ['Due', '#febc2e'], ['Late', '#ff6b6b']];
  return <Co label="Invoices" className={c.list}>{['INV-204', 'INV-205', 'INV-206'].map((t, k) => <button key={t} type="button" className={c.line} onClick={() => setS((a) => a.map((x, i) => (i === k ? (x + 1) % 3 : x)))}><span>{t}</span><em className={c.status} style={{ '--st': C[s[k]][1] }}>{C[s[k]][0]}</em></button>)}</Co>;
}
