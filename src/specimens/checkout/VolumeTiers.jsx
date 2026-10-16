import { useState } from 'react';
import c from './checkout.module.css';
import { $, Co } from './shared';

/* 07 */ export function VolumeTiers() {
  const [q, setQ] = useState(300);
  const t = [[100, 0.1], [500, 0.08], [1000, 0.05]];
  const rate = (t.find(([m]) => q <= m) ?? t[2])[1];
  return (
    <Co label="Volume tiers" className={c.center}>
      <div className={c.chips} role="group" aria-label="Volume">{[100, 300, 800, 2000].map((v) => <button key={v} type="button" className={c.chip} aria-pressed={q === v} onClick={() => setQ(v)}>{v}</button>)}</div>
      <b className={c.big}>{$(q * rate)}</b><small className={c.m}>{$(rate)} each</small>
    </Co>
  );
}
