import { useState } from 'react';
import c from './dials.module.css';
import { useSpin } from './shared';

/* 5 */ export function ClickWheel() {
  const [rot, bind] = useSpin();
  const [on, setOn] = useState(false);
  return (
    <div className={c.clickWheel} {...bind} aria-label="Click wheel" style={{ ...bind.style, '--r': `${rot}deg` }}>
      <i /><button type="button" aria-pressed={on} aria-label="Centre button" onPointerDown={(e) => e.stopPropagation()} onClick={() => setOn(!on)}>{Math.round(rot / 15)}</button>
    </div>
  );
}
