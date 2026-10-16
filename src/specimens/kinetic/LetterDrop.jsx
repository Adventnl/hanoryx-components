import { useState } from 'react';
import c from './kinetic.module.css';

/* 38 */ const DROPS = [0.9, 0.5, 1.2, 0.7, 1.05, 0.6];

export function LetterDrop() {
  const [down, setDown] = useState(false);
  return (
    <div className={c.fig}>
      <button type="button" className={c.drop} aria-pressed={down} aria-label="Letter drop. Click to drop the letters or pick them up" onClick={() => setDown(!down)}>
        {[...'GRAVITY'.slice(0, 6)].map((ch, i) => <span key={i} data-down={down} style={{ '--d': `${DROPS[i]}s`, '--r': `${(i % 2 ? 1 : -1) * (8 + i * 6)}deg` }}>{ch}</span>)}
      </button>
    </div>
  );
}
