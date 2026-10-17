import { useState } from 'react';
import c from "../tilt.module.css";

export function Wobble() {
  const [n, setN] = useState(0);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-label="A card that wobbles when pressed" onClick={() => setN((v) => v + 1)}>
      <span className={c.stage}>
        <span key={n} className={`${c.card} ${n ? c.wobble : ''}`}><b>Wobble</b><span>{n} {n === 1 ? 'push' : 'pushes'}</span></span>
      </span>
    </button>
  );
}
