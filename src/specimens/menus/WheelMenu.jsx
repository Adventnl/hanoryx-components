import { useState } from 'react';
import { clamp } from '../../stage/hooks';
import c from './menus.module.css';

/* 26 */ export function WheelMenu() {
  const names = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn'];
  const [k, setK] = useState(2);
  return (
    <div className={c.wheel} tabIndex={0} role="listbox" aria-label="Wheel menu" aria-activedescendant={`wheel-${k}`} onWheel={(e) => { e.preventDefault(); setK((v) => clamp(v + Math.sign(e.deltaY), 0, 5)); }} onKeyDown={(e) => { if (e.key === 'ArrowDown') { e.preventDefault(); setK((v) => clamp(v + 1, 0, 5)); } if (e.key === 'ArrowUp') { e.preventDefault(); setK((v) => clamp(v - 1, 0, 5)); } }}>
      {names.map((n, i) => <span key={n} id={`wheel-${i}`} role="option" aria-selected={i === k} style={{ '--d': i - k }} onClick={() => setK(i)}>{n}</span>)}
    </div>
  );
}
