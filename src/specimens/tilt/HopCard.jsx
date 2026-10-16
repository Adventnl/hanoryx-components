import { useState } from 'react';
import c from './tilt.module.css';

export function HopCard() {
  const [n, setN] = useState(0);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-label="A card that hops across and back" onClick={() => setN((v) => v + 1)}>
      <span className={c.throwBox}>
        <i key={n} className={n ? c.hop : ''}><b>Hop</b></i>
        <u className={c.spot} />
      </span>
    </button>
  );
}
