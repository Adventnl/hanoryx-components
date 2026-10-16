import { useState } from 'react';
import c from './switchboard.module.css';

/* 33 */ export function DimmerStep() {
  const [n, setN] = useState(2);
  return (
    <button type="button" className={c.dimmer} style={{ '--n': n }} aria-label={`Dimmer, level ${n} of 4`} onClick={() => setN((n + 1) % 5)}>
      <span className={c.bulb} data-on={n > 0} style={{ opacity: 0.25 + n * 0.19 }} />
      <p>{[0, 1, 2, 3].map((x) => <i key={x} data-on={n > x} />)}</p>
    </button>
  );
}
