import { useState } from 'react';
import c from './stamps.module.css';
import { tilt } from './shared';

/* 06 */ export function CancelMark() {
  const [n, setN] = useState(0);
  return (
    <button type="button" className={c.press} onClick={() => setN((v) => v + 1)} aria-label="Postmark the letter again">
      <span className={c.post} style={{ '--r': tilt(n + 2, 12) }}>
        <svg viewBox="0 0 100 60"><circle cx="30" cy="30" r="22" className={c.pm} /><text x="30" y="27" textAnchor="middle">OCT</text><text x="30" y="38" textAnchor="middle">14 · 26</text>
          {[18, 26, 34, 42].map((y) => <path key={y} d={`M56 ${y}q7-5 14 0t14 0t14 0`} className={c.pm} />)}</svg>
      </span>
    </button>
  );
}
