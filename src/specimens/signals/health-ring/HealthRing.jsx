import { useDrag } from "../../../stage/hooks";
import c from "../signals.module.css";

/* 8 */ export function HealthRing() {
  const [v, bind] = useDrag({ init: 0.82 });
  const t = v > 0.7 ? 'ok' : v > 0.4 ? 'warn' : 'bad';
  return (
    <div className={c.hring} {...bind} aria-label="Health score" aria-valuetext={`${Math.round(v * 100)} percent`} data-t={t} style={{ ...bind.style, '--v': v }}>
      <svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="42" /><circle cx="50" cy="50" r="42" pathLength="1" /></svg><b>{Math.round(v * 100)}</b>
    </div>
  );
}
