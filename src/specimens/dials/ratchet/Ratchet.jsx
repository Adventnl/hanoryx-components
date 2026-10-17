import { useState } from 'react';
import c from "../dials.module.css";
import { gear } from "../shared";

/* 39 */ export function Ratchet() {
  const [n, setN] = useState(0);
  return (
    <button type="button" className={c.ratchet} aria-label="Ratchet wheel, click to advance a tooth" onClick={() => setN(n + 1)}>
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <path d={gear(12, 36, 44)} style={{ transform: `rotate(${n * 30}deg)` }} />
        <path className={c.pawl} d="M78 12 L58 28 L64 32 L84 18 Z" style={{ transform: `rotate(${n % 2 ? -4 : 0}deg)` }} />
      </svg>
    </button>
  );
}
