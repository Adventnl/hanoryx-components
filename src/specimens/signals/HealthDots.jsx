import { useState } from 'react';
import c from './signals.module.css';

/* 34 */ export function HealthDots() {
  const [k, setK] = useState(3);
  return (
    <div className={c.dots5} role="radiogroup" aria-label="Health, one to five">
      {[1, 2, 3, 4, 5].map((n) => <button key={n} type="button" role="radio" aria-checked={n === k} aria-label={`${n} of 5`} data-on={n <= k} data-t={k > 3 ? 'ok' : k > 1 ? 'warn' : 'bad'} onClick={() => setK(n)} />)}
    </div>
  );
}
