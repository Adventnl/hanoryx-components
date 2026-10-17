import { useState } from 'react';
import c from "../fields.module.css";

/* 6 */ export function PasswordMeter() {
  const [v, setV] = useState('');
  const score = Math.min(4, (v.length > 7) + (/[A-Z]/.test(v) && /[a-z]/.test(v)) + /\d/.test(v) + /[^A-Za-z0-9]/.test(v));
  return (
    <div className={c.meter}>
      <input type="text" value={v} placeholder="Type a password" aria-label="Password to rate" onChange={(e) => setV(e.target.value)} />
      <p>{Array.from({ length: 4 }, (_, i) => <i key={i} data-on={i < score} />)}</p>
      <output>{['EMPTY', 'WEAK', 'FAIR', 'GOOD', 'STRONG'][v ? score : 0]}</output>
    </div>
  );
}
