import c from './steps.module.css';
import { useStep } from './shared';

/* 33 */ export function OptionalStep() {
  const [i, set] = useStep(4, 1);
  return (
    <ol className={c.opt} aria-label="Stepper with an optional step">
      {[['Basics', false], ['Extras', true], ['Terms', false], ['Done', false]].map(([t, o], k) => <li key={t} data-s={k < i ? 'done' : k === i ? 'now' : 'next'}><button type="button" aria-current={k === i ? 'step' : undefined} onClick={() => set(k)}>{t}{o && <small>optional</small>}</button></li>)}
    </ol>
  );
}
