import { useState } from 'react';
import c from "../gauges.module.css";
import { Ticks, arc } from "../shared";

/* 1 */ const SWEEP = [0.08, 0.36, 0.62, 0.9, 0.5];

export function SweepDial() {
  const [k, setK] = useState(1);
  const v = SWEEP[k];
  return (
    <button type="button" className={c.half} style={{ '--v': v }} aria-label={`Sweep dial at ${Math.round(v * 100)}. Click to move the needle`} onClick={() => setK((k + 1) % SWEEP.length)}>
      <svg viewBox="0 0 100 60" aria-hidden="true">
        <path className={c.rail} d={arc(50, 50, 44, -90, 90)} />
        <path className={c.hot} d={arc(50, 50, 44, 54, 90)} />
        <Ticks n={20} from={-90} to={90} r={38} len={3} major={5} majorLen={5} />
        <g className={c.nd}><path d="M50 11 L48.4 50 H51.6Z" /></g>
        <circle className={c.hub} cx="50" cy="50" r="4" />
      </svg>
      <span>{Math.round(v * 100)}</span>
    </button>
  );
}
