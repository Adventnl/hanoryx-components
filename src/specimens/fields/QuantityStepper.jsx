import { useState } from 'react';
import c from './fields.module.css';

/* 17 */ export function QuantityStepper() {
  const [n, setN] = useState(1);
  return (
    <div className={c.qty}>
      <button type="button" aria-label="Fewer" disabled={n <= 0} onClick={() => setN(n - 1)}>−</button>
      <output aria-live="polite">{n}</output>
      <button type="button" aria-label="More" disabled={n >= 9} onClick={() => setN(n + 1)}>+</button>
    </div>
  );
}
