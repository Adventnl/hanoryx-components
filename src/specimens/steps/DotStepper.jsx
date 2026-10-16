import c from './steps.module.css';
import { Nav, useStep } from './shared';

/* 1 */ export function DotStepper() {
  const [i, set] = useStep(5, 1);
  return (
    <div className={c.col}>
      <ol className={c.dots} style={{ '--i': i }} aria-label="Dot stepper">{[0, 1, 2, 3, 4].map((k) => <li key={k} data-s={k < i ? 'done' : k === i ? 'now' : 'next'}><button type="button" aria-label={`Step ${k + 1}`} aria-current={k === i ? 'step' : undefined} onClick={() => set(k)} /></li>)}</ol>
      <Nav i={i} n={5} set={set} />
    </div>
  );
}
