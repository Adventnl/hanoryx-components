import { useState } from 'react';
import c from "../gauges.module.css";
import { Ticks, arc } from "../shared";

/* 25 */ const VOLTS = [5, 12, 3.3, 9, 1.5, 15];

export function Voltmeter() {
  const [k, setK] = useState(0);
  const v = VOLTS[k];
  return (
    <button type="button" className={c.volt} style={{ '--v': v / 15 }} aria-label={`Voltmeter reading ${v} volts. Click to probe the next rail`} onClick={() => setK((k + 1) % VOLTS.length)}>
      <svg viewBox="0 0 100 60" aria-hidden="true">
        <Ticks n={30} from={-60} to={60} r={46} len={3} major={5} majorLen={6} labels={['0', '3', '6', '9', '12', '15']} labelR={33} />
        <path className={c.redArc} d={arc(50, 50, 49, 36, 60)} />
        <text x="50" y="42" textAnchor="middle">V DC</text>
        <g className={c.nd}><path d="M50 8 L48.9 50 H51.1Z" /></g>
        <circle className={c.hubInk} cx="50" cy="50" r="3.4" />
      </svg>
      <output>{v.toFixed(1)} V</output>
    </button>
  );
}
