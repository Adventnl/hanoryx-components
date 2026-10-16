import { useState } from 'react';
import c from './studio.module.css';

/* 31 */ export function TapTempo() {
  const [taps, setTaps] = useState([]);
  const bpm = taps.length > 1 ? Math.round(60000 / ((taps[taps.length - 1] - taps[0]) / (taps.length - 1))) : 0;
  return (
    <div className={c.tap}>
      <button type="button" onClick={() => setTaps((a) => [...a.slice(-5), performance.now()])}>TAP</button>
      <output aria-live="polite">{bpm || '—'}<small>BPM</small></output>
      <button type="button" className={c.reset} onClick={() => setTaps([])}>reset</button>
    </div>
  );
}
