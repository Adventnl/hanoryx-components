import { useState } from 'react';
import c from "../faders.module.css";

/* 35 */ export function FanSpeed() {
  const [n, setN] = useState(2);
  return (
    <div className={c.fan} style={{ '--d': n ? `${(2.4 / n).toFixed(2)}s` : '0s' }} data-n={n}>
      <svg viewBox="0 0 40 40" aria-hidden="true"><g><path d="M20 20C20 10 28 6 31 12 28 14 24 16 20 20ZM20 20C30 20 34 28 28 31 26 28 24 24 20 20ZM20 20C20 30 12 34 9 28 12 26 16 24 20 20ZM20 20C10 20 6 12 12 9 14 12 16 16 20 20Z" /></g></svg>
      <input type="range" min="0" max="4" step="1" value={n} aria-label="Fan speed" onChange={(e) => setN(Number(e.target.value))} />
    </div>
  );
}
