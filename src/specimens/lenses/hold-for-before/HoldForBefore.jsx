import { useState } from 'react';
import c from "../lenses.module.css";
import { Scene } from "../shared";

/* 21 */ export function HoldForBefore() {
  const [b, setB] = useState(false);
  return (
    <div className={c.hold}>
      <div className={`${c.area} ${c.holdBox}`}><Scene className={c.fill} /><Scene className={`${c.fill} ${c.mono} ${c.holdTop}`} data-b={b} /></div>
      <button type="button" onPointerDown={() => setB(true)} onPointerUp={() => setB(false)} onPointerLeave={() => setB(false)} onKeyDown={(e) => { if (e.key === ' ' || e.key === 'Enter') setB(true); }} onKeyUp={() => setB(false)} onBlur={() => setB(false)}>Hold for before</button>
    </div>
  );
}
