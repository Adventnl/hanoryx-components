import { useState } from 'react';
import c from './fields.module.css';

/* 26 */ export function DotPin() {
  const [v, setV] = useState('');
  return (
    <label className={c.dots}>
      <input value={v} inputMode="numeric" maxLength={4} aria-label="PIN" onChange={(e) => setV(e.target.value.replace(/\D/g, ''))} />
      <p aria-hidden="true">{Array.from({ length: 4 }, (_, i) => <i key={i} data-on={i < v.length} />)}</p>
    </label>
  );
}
