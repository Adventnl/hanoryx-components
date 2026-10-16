import { useState } from 'react';
import c from './gauges.module.css';

/* 8 */ const DBM = [-96, -88, -80, -72, -64, -56];

export function SignalBars() {
  const [n, setN] = useState(3);
  return (
    <button type="button" className={c.signal} aria-label={`Signal strength ${n} of 5. Click to change`} onClick={() => setN((n + 1) % 6)}>
      <span>{Array.from({ length: 5 }, (_, i) => <i key={i} style={{ '--i': i }} data-on={i < n} />)}</span>
      <em>{DBM[n]} dBm</em>
    </button>
  );
}
