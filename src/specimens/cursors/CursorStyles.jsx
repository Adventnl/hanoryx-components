import { useState } from 'react';
import c from './cursors.module.css';

/* 22 */ export function CursorStyles() {
  const names = ['pointer', 'crosshair', 'help', 'zoom-in', 'not-allowed', 'grab', 'text', 'move'];
  const [k, setK] = useState(-1);
  return (
    <div className={c.gallery} onPointerLeave={() => setK(-1)}>
      {names.map((n, i) => <button key={n} type="button" style={{ cursor: n }} onPointerEnter={() => setK(i)} onFocus={() => setK(i)}>{n}</button>)}
      <output>{k < 0 ? 'Hover a tile' : `cursor: ${names[k]}`}</output>
    </div>
  );
}
