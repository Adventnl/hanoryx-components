import { usePrefersReducedMotion } from "../../../core/hooks/use-prefers-reduced-motion/usePrefersReducedMotion";
import { useEffect, useState } from 'react';
import { useLive, clamp } from "../../../stage/hooks";
import c from "../gauges.module.css";

/* 37 */ export function TankLevel() {
  const [v, setV] = useState(0.55);
  const live = useLive();
  const reduced = usePrefersReducedMotion();
  useEffect(() => {
    if (!live || reduced) return undefined;
    const id = window.setInterval(() => setV((x) => clamp(x - 0.006)), 200);
    return () => window.clearInterval(id);
  }, [live, reduced]);
  return (
    <button type="button" className={c.tank} style={{ '--v': v }} aria-label={`Tank at ${Math.round(v * 100)} percent. Click to pump water in`} onClick={() => setV((x) => clamp(x + 0.22))}>
      <span className={c.vessel}><i /></span>
      <span className={c.scale}><em>100</em><em>75</em><em>50</em><em>25</em><em>0</em></span>
      <b>{Math.round(v * 100)}%</b>
    </button>
  );
}
