import { useState } from 'react';
import c from "../studio.module.css";

/* 30 */ export function PianoKeys() {
  const [k, setK] = useState(-1);
  const white = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'];
  return (
    <div className={c.keys} role="group" aria-label="Piano keys">
      {white.map((n, i) => <button key={i} type="button" aria-label={`Key ${n}`} data-on={k === i} onPointerDown={() => setK(i)} onPointerUp={() => setK(-1)} onPointerLeave={() => setK(-1)} onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') setK(i); }} onKeyUp={() => setK(-1)}><span>{n}</span></button>)}
      {[0, 1, 3, 4, 5].map((i) => <i key={i} style={{ '--i': i }} aria-hidden="true" />)}
    </div>
  );
}
