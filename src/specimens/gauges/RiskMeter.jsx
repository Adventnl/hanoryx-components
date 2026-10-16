import { useState } from 'react';
import c from './gauges.module.css';
import { arc } from './shared';

/* 38 */ const RISK = [['Low', 0.16], ['Medium', 0.5], ['High', 0.84]];

export function RiskMeter() {
  const [k, setK] = useState(1);
  return (
    <button type="button" className={c.half} style={{ '--v': RISK[k][1] }} aria-label={`Risk ${RISK[k][0]}. Click to change`} onClick={() => setK((k + 1) % 3)}>
      <svg viewBox="0 0 100 60" aria-hidden="true">
        <path className={c.zone} data-z="0" d={arc(50, 50, 42, -88, -32)} />
        <path className={c.zone} data-z="1" d={arc(50, 50, 42, -28, 28)} />
        <path className={c.zone} data-z="2" d={arc(50, 50, 42, 32, 88)} />
        <g className={c.nd}><path d="M50 14 L48.6 50 H51.4Z" /></g>
        <circle className={c.hub} cx="50" cy="50" r="4" />
      </svg>
      <span>{RISK[k][0]}</span>
    </button>
  );
}
