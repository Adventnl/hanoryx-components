import { useState } from 'react';
import c from "../popovers.module.css";

/* 10 */ export function ProductHotspots() {
  const [k, setK] = useState(-1);
  const spots = [[28, 38, 'Lens'], [64, 56, 'Strap'], [48, 22, 'Dial']];
  return (
    <div className={c.spots} onPointerLeave={() => setK(-1)}>
      <svg viewBox="0 0 100 70" aria-hidden="true"><circle cx="50" cy="38" r="22" /><circle cx="50" cy="38" r="12" /><path d="M20 38h60M50 8v60" /></svg>
      {spots.map(([x, y, t], i) => <button key={t} type="button" aria-label={t} style={{ left: `${x}%`, top: `${y}%` }} onPointerEnter={() => setK(i)} onFocus={() => setK(i)} onBlur={() => setK(-1)}><i />{k === i && <em>{t}</em>}</button>)}
    </div>
  );
}
