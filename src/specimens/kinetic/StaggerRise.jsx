import { useState } from 'react';
import c from './kinetic.module.css';

/* 7 */ export function StaggerRise() {
  const [n, setN] = useState(0);
  return (
    <div className={c.fig}>
      <button type="button" className={c.rise} aria-label="Stagger rise. Click to play it again" onClick={() => setN(n + 1)}>
        {['Rise', 'from', 'below'].map((w, i) => <span key={`${n}-${w}`}><i style={{ '--i': i }}>{w}</i></span>)}
      </button>
    </div>
  );
}
