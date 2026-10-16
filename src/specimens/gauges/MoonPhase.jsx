import { useState } from 'react';
import c from './gauges.module.css';

/* 41 */ const PHASES = [['New', 'r', 1, false], ['Waxing crescent', 'r', 0.5, false], ['First quarter', 'r', 0, false], ['Waxing gibbous', 'r', 0.5, true], ['Full', 'r', 1, true], ['Waning gibbous', 'l', 0.5, true], ['Last quarter', 'l', 0, true], ['Waning crescent', 'l', 0.5, false]];

export function MoonPhase() {
  const [k, setK] = useState(3);
  const [name, side, w, lit] = PHASES[k];
  return (
    <button type="button" className={c.moon} data-side={side} data-lit={lit} style={{ '--w': w }} aria-label={`Moon phase: ${name}. Click for the next phase`} onClick={() => setK((k + 1) % PHASES.length)}>
      <span><i /><u /></span>
      <em>{name}</em>
    </button>
  );
}
