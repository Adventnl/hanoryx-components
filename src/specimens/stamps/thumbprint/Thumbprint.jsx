import { useState } from 'react';
import c from "../stamps.module.css";

/* 38 */ export function Thumbprint() {
  const [n, setN] = useState(1);
  return (
    <button type="button" className={c.thumb} onClick={() => setN((v) => (v % 3) + 1)} aria-label={`Thumbprint, ink level ${n}. Click to change`} style={{ '--ink': n / 3 }}>
      <svg viewBox="0 0 60 80">{Array.from({ length: 9 }, (_, k) => <ellipse key={k} cx="30" cy="42" rx={4 + k * 3.2} ry={6 + k * 4.2} strokeDasharray={k % 2 ? '9 3' : '16 4 3 4'} />)}</svg>
    </button>
  );
}
