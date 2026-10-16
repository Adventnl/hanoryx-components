import { useState } from 'react';
import c from './cockpit.module.css';

/* 23 */ export function RadioTuner() {
  const [f, setF] = useState(12150);
  return (
    <div className={c.radio}>
      <output aria-live="polite">{(f / 100).toFixed(2)}<small>MHz</small></output>
      <div role="group" aria-label="Tune">
        <button type="button" aria-label="Down one megahertz" onClick={() => setF((v) => Math.max(11800, v - 100))}>−1</button>
        <button type="button" aria-label="Down 25 kilohertz" onClick={() => setF((v) => Math.max(11800, v - 25))}>−.025</button>
        <button type="button" aria-label="Up 25 kilohertz" onClick={() => setF((v) => Math.min(13697, v + 25))}>+.025</button>
        <button type="button" aria-label="Up one megahertz" onClick={() => setF((v) => Math.min(13697, v + 100))}>+1</button>
      </div>
    </div>
  );
}
