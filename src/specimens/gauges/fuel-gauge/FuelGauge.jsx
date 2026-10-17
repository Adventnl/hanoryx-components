import { useState } from 'react';
import c from "../gauges.module.css";
import { Ticks, arc } from "../shared";

/* 14 */ const FUEL = [0.1, 0.34, 0.58, 0.82, 1];

export function FuelGauge() {
  const [k, setK] = useState(1);
  const v = FUEL[k];
  return (
    <button type="button" className={c.fuel} style={{ '--v': v }} data-low={v < 0.2} aria-label={`Fuel gauge ${Math.round(v * 100)} percent. Click to refuel`} onClick={() => setK((k + 1) % FUEL.length)}>
      <svg viewBox="0 4 100 52" aria-hidden="true">
        <path className={c.rail} d={arc(50, 50, 44, -60, 60)} />
        <path className={c.hot} d={arc(50, 50, 44, -60, -42)} />
        <Ticks n={8} from={-60} to={60} r={38} len={3} major={4} majorLen={6} />
        <text className={c.tagBig} x="21" y="42" textAnchor="middle">E</text>
        <text className={c.tagBig} x="79" y="42" textAnchor="middle">F</text>
        <text className={c.tagMid} x="50" y="20" textAnchor="middle">½</text>
        <g className={c.nd}><path d="M50 12 L48.5 50 H51.5Z" /></g>
        <circle className={c.hub} cx="50" cy="50" r="3.6" />
      </svg>
      <i />
    </button>
  );
}
