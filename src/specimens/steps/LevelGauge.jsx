import c from './steps.module.css';
import { Nav, useStep } from './shared';

/* 42 */ export function LevelGauge() {
  const [i, set] = useStep(5, 1);
  return (
    <div className={c.gauge}>
      <div role="progressbar" aria-label="Level" aria-valuemin={1} aria-valuemax={5} aria-valuenow={i + 1} style={{ '--v': (i + 1) / 5 }}><span>{i + 1}</span></div>
      <Nav i={i} n={5} set={set} label="Level" />
    </div>
  );
}
