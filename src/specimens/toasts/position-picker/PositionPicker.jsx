import { useState } from 'react';
import c from "../toasts.module.css";

/* 27 */ export function PositionPicker() {
  const [pos, setPos] = useState('br');
  const names = { tl: 'Top left', tr: 'Top right', bl: 'Bottom left', br: 'Bottom right' };
  return (
    <div className={c.where}>
      <div className={c.screen}><i data-pos={pos} aria-hidden="true" /></div>
      <div role="radiogroup" aria-label="Toast position">{Object.keys(names).map((k) => <button key={k} type="button" role="radio" aria-checked={pos === k} aria-label={names[k]} onClick={() => setPos(k)} data-k={k} />)}</div>
    </div>
  );
}
