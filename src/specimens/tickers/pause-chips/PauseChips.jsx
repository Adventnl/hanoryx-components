import { useState } from 'react';
import c from "../tickers.module.css";
import { Belt } from "../shared";

const CHIPS = ['Atlas', 'Beacon', 'Cobalt', 'Drift', 'Ember', 'Fathom', 'Gale', 'Harbor'];

export function PauseChips() {
  const [pick, setPick] = useState('Cobalt');
  return (
    <div className={c.fig}>
      <Belt dur={20} className={c.chips}>
        {CHIPS.map((n) => <button key={n} type="button" className={c.chip} aria-pressed={pick === n} onClick={() => setPick(n)}>{n}</button>)}
      </Belt>
      <p className={c.note}>{pick} selected  ·  hover or focus to pause</p>
    </div>
  );
}
