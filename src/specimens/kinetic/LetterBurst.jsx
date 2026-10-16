import { useState } from 'react';
import { polar } from '../../stage/chartKit';
import c from './kinetic.module.css';

/* 37 */ export function LetterBurst() {
  const [n, setN] = useState(0);
  return (
    <div className={c.fig}>
      <button type="button" className={c.burst} aria-label="Burst. Click to scatter the letters outward" onClick={() => setN(n + 1)}>
        {[...'BURST'].map((ch, i) => { const [x, y] = polar(0, 0, 70, i * 72 + 30); return <span key={`${n}-${i}`} className={n ? c.burstGo : undefined} style={{ '--x': `${x}px`, '--y': `${y}px`, '--r': `${(i - 2) * 40}deg` }}>{ch}</span>; })}
      </button>
    </div>
  );
}
