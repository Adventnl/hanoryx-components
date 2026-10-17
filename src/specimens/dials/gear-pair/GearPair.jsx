import { useState } from 'react';
import c from "../dials.module.css";
import { gear } from "../shared";

const GEAR_A = gear(12, 38, 46);

const GEAR_B = gear(8, 24, 31);

/* 20 */ export function GearPair() {
  const [n, setN] = useState(0);
  return (
    <button type="button" className={c.gears} aria-label="Turn the gears" onClick={() => setN(n + 1)}>
      <svg viewBox="-8 0 152 110" aria-hidden="true">
        <g transform="translate(-8 12)"><path className={c.ga} d={GEAR_A} style={{ transform: `rotate(${n * 30}deg)` }} /></g>
        <g transform="translate(52 -20)"><path className={c.gb} d={GEAR_B} style={{ transform: `rotate(${-n * 45 + 22}deg)` }} /></g>
      </svg>
    </button>
  );
}
