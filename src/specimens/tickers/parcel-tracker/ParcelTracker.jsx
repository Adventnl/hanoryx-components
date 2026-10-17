import { useState } from 'react';
import c from "../tickers.module.css";

const STEPS = ['Packed', 'Sorted', 'On the road', 'Out today', 'Delivered'];

export function ParcelTracker() {
  const [n, setN] = useState(1);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-label={`Parcel status: ${STEPS[n]}. Advance it`} onClick={() => setN((v) => (v + 1) % STEPS.length)}>
      <span className={c.track} style={{ '--n': n }}>
        <span className={c.rail}><i /></span>
        {STEPS.map((s, k) => <span key={s} className={c.stepDot} data-state={k < n ? 'done' : k === n ? 'now' : 'next'} />)}
      </span>
      <span key={n} className={c.stepName}>{STEPS[n]}</span>
    </button>
  );
}
