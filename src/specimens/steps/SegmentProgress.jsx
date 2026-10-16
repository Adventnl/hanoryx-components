import c from './steps.module.css';
import { Nav, useStep } from './shared';

/* 4 */ export function SegmentProgress() {
  const [i, set] = useStep(4, 1);
  return (
    <div className={c.col}>
      <div className={c.segs} role="progressbar" aria-label="Progress" aria-valuemin={1} aria-valuemax={4} aria-valuenow={i + 1}>{[0, 1, 2, 3].map((k) => <i key={k} data-on={k <= i} />)}</div>
      <Nav i={i} n={4} set={set} />
    </div>
  );
}
