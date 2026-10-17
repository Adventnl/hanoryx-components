import { useState } from 'react';
import c from "../faders.module.css";

/* 2 */ export function DualRange() {
  const [lo, setLo] = useState(25);
  const [hi, setHi] = useState(70);
  return (
    <div className={c.dual} style={{ '--lo': lo, '--hi': hi }}>
      <input type="range" min="0" max="100" value={lo} aria-label="Range start" onChange={(e) => setLo(Math.min(Number(e.target.value), hi - 4))} />
      <input type="range" min="0" max="100" value={hi} aria-label="Range end" onChange={(e) => setHi(Math.max(Number(e.target.value), lo + 4))} />
      <span>{lo} – {hi}</span>
    </div>
  );
}
