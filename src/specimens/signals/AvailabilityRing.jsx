import { useDrag } from '../../stage/hooks';
import c from './signals.module.css';

/* 38 */ export function AvailabilityRing() {
  const [v, bind] = useDrag({ init: 0.9 });
  const pct = (99 + v).toFixed(2);
  return (
    <div className={c.sla} {...bind} aria-label="Availability" aria-valuetext={`${pct} percent`} style={{ ...bind.style, '--v': v }}>
      <svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="42" /><circle cx="50" cy="50" r="42" pathLength="1" /></svg>
      <b>{pct}<small>%</small></b>
    </div>
  );
}
