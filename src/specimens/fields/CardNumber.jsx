import { useState } from 'react';
import c from './fields.module.css';

/* 5 */ export function CardNumber() {
  const [v, setV] = useState('');
  const digits = v.replace(/\D/g, '');
  const luhn = digits.length >= 12 && [...digits].reverse().reduce((s, d, i) => { let n = Number(d); if (i % 2) { n *= 2; if (n > 9) n -= 9; } return s + n; }, 0) % 10 === 0;
  return (
    <label className={c.card}>
      <span>CARD NUMBER</span>
      <input value={v} inputMode="numeric" placeholder="0000 0000 0000 0000" onChange={(e) => setV(e.target.value.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim())} />
      <em data-ok={luhn}>{luhn ? 'CHECK DIGIT OK' : 'CHECK DIGIT —'}</em>
    </label>
  );
}
