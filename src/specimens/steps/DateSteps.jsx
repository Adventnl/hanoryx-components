import { useState } from 'react';
import c from './steps.module.css';
import { useStep } from './shared';

/* 35 */ export function DateSteps() {
  const [i, set] = useStep(3, 0);
  const [pick, setPick] = useState(['', '', '']);
  const opts = [['Jan', 'Feb', 'Mar', 'Apr'], ['5', '12', '19', '26'], ['2024', '2025', '2026', '2027']];
  return (
    <div className={c.dstep}>
      <ol aria-label="Date steps">{['Month', 'Day', 'Year'].map((t, k) => <li key={t} data-on={k === i} data-done={!!pick[k]}><button type="button" aria-current={k === i ? 'step' : undefined} onClick={() => set(k)}>{pick[k] || t}</button></li>)}</ol>
      <div>{opts[i].map((o) => <button key={o} type="button" onClick={() => { setPick((p) => p.map((x, j) => (j === i ? o : x))); if (i < 2) set(i + 1); }}>{o}</button>)}</div>
    </div>
  );
}
