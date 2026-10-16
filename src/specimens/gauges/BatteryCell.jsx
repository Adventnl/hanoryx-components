import { usePrefersReducedMotion } from '../../core/hooks/usePrefersReducedMotion';
import { useEffect, useState } from 'react';
import { useLive, clamp } from '../../stage/hooks';
import c from './gauges.module.css';

/* 7 */ export function BatteryCell() {
  const [s, setS] = useState({ v: 0.42, chg: true });
  const live = useLive();
  const reduced = usePrefersReducedMotion();
  useEffect(() => {
    if (!live || reduced) return undefined;
    const id = window.setInterval(() => setS((p) => {
      const v = clamp(p.v + (p.chg ? 0.012 : -0.01));
      return { v, chg: v >= 1 ? false : v <= 0.06 ? true : p.chg };
    }), 120);
    return () => window.clearInterval(id);
  }, [live, reduced]);
  const pct = Math.round(s.v * 100);
  return (
    <button type="button" className={c.batt} data-chg={s.chg} data-low={s.v < 0.2} style={{ '--v': s.v }} aria-label={`Battery ${pct} percent, ${s.chg ? 'charging' : 'discharging'}. Click to reverse`} onClick={() => setS((p) => ({ ...p, chg: !p.chg }))}>
      <span className={c.cell}><i /><output>{pct}%</output></span>
      <u />
      <svg viewBox="0 0 10 16" aria-hidden="true"><path d="M6 0 1 9h4l-1 7 5-9H5z" /></svg>
    </button>
  );
}
