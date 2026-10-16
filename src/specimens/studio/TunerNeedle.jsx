import c from './studio.module.css';
import { useLevels } from './shared';

/* 33 */ export function TunerNeedle() {
  const [v] = useLevels(1, 220);
  const cents = Math.round((v - 0.5) * 80);
  return (
    <div className={c.tuner} role="img" aria-label={`Tuner: A, ${cents} cents`}>
      <div><i style={{ left: `${50 + cents * 0.9}%` }} /></div>
      <b data-ok={Math.abs(cents) < 6}>A</b><small>{cents > 0 ? '+' : ''}{cents}¢</small>
    </div>
  );
}
