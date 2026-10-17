import { useState } from 'react';
import c from "../signals.module.css";

/* 11 */ export function WiFiArcs() {
  const [n, setN] = useState(2);
  return (
    <button type="button" className={c.wifi} aria-label={`Wi-Fi ${n} of 3. Press to change`} onClick={() => setN((n % 3) + 1)}>
      <svg viewBox="0 0 40 32" aria-hidden="true">{[3, 2, 1].map((k) => <path key={k} d={`M${20 - k * 6} ${20 - k * 3.4}a${k * 8} ${k * 8} 0 0 1 ${k * 12} 0`} data-on={k <= n} style={{ transform: `translateY(${(3 - k) * -1}px)` }} />)}<circle cx="20" cy="26" r="2.4" /></svg>
    </button>
  );
}
