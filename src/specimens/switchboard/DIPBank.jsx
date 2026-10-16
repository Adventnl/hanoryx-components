import { useState } from 'react';
import c from './switchboard.module.css';

/* 8 */ export function DIPBank() {
  const [bits, setBits] = useState([1, 0, 1, 1, 0, 0, 1, 0]);
  const flip = (n) => setBits((b) => b.map((x, i) => (i === n ? 1 - x : x)));
  return (
    <div className={c.dip}>
      <div>{bits.map((x, n) => <button type="button" key={n} aria-pressed={x === 1} aria-label={`Bit ${n + 1}`} onClick={() => flip(n)}><i /></button>)}</div>
      <output>{parseInt(bits.join(''), 2)}</output>
    </div>
  );
}
