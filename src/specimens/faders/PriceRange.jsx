import { useState } from 'react';
import { clamp } from '../../stage/hooks';
import c from './faders.module.css';

/* 25 */ export function PriceRange() {
  const [lo, setLo] = useState(40);
  const [hi, setHi] = useState(160);
  return (
    <div className={c.price}>
      <label>MIN<input type="number" min="0" max="200" value={lo} onChange={(e) => setLo(clamp(Number(e.target.value), 0, hi))} aria-label="Minimum price" /></label>
      <div style={{ '--lo': lo / 2, '--hi': hi / 2 }}><u /></div>
      <label>MAX<input type="number" min="0" max="200" value={hi} onChange={(e) => setHi(clamp(Number(e.target.value), lo, 200))} aria-label="Maximum price" /></label>
    </div>
  );
}
