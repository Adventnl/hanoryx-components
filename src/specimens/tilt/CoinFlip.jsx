import { useState } from 'react';
import c from './tilt.module.css';

export function CoinFlip() {
  const [n, setN] = useState(0);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-label={`A coin; flip it. Showing ${n % 2 ? 'tails' : 'heads'}`} onClick={() => setN((v) => v + 1)}>
      <span className={c.coinBox}>
        <span className={c.coin} style={{ transform: `rotateY(${n * 540 + 0}deg)` }}><i>H</i><i className={c.tails}>T</i></span>
      </span>
    </button>
  );
}
