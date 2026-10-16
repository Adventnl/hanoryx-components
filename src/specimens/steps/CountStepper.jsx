import { useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './steps.module.css';

/* 18 */ export function CountStepper() {
  const [n, setN] = useState(2);
  return (
    <div className={c.qty} role="group" aria-label="Quantity">
      <button type="button" aria-label="Fewer" disabled={n <= 0} onClick={() => setN(n - 1)}><Ico n="minus" /></button>
      <output aria-live="polite">{n}</output>
      <button type="button" aria-label="More" disabled={n >= 9} onClick={() => setN(n + 1)}><Ico n="plus" /></button>
    </div>
  );
}
