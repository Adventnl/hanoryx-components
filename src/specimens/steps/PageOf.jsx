import { useState } from 'react';
import c from './steps.module.css';

/* 11 */ export function PageOf() {
  const [p, setP] = useState(3);
  return (
    <div className={c.pageOf}>
      <button type="button" aria-label="Previous" disabled={p === 1} onClick={() => setP(p - 1)}>←</button>
      <span>Page <b>{p}</b> of 9</span>
      <button type="button" aria-label="Next" disabled={p === 9} onClick={() => setP(p + 1)}>→</button>
    </div>
  );
}
