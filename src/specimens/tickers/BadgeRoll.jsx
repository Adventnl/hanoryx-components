import { useState } from 'react';
import c from './tickers.module.css';
import { Roll } from './shared';

export function BadgeRoll() {
  const [n, setN] = useState(7);
  return (
    <div className={c.fig}>
      <div className={c.bellRow}>
        <button type="button" className={`${c.bell} ${c.reset}`} onClick={() => setN((v) => Math.min(99, v + 1))} aria-label={`Notifications, ${n}. Add one`}>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 17v-6a6 6 0 0 1 12 0v6l1.6 2H4.4zM10 21.5h4" /></svg>
          <span className={c.badge} data-zero={n === 0} style={{ '--fs': '0.9rem' }}><Roll d={Math.floor(n / 10)} /><Roll d={n % 10} /></span>
        </button>
        <button type="button" className={c.nudge} onClick={() => setN(0)} aria-label="Clear the notifications">Clear</button>
      </div>
    </div>
  );
}
