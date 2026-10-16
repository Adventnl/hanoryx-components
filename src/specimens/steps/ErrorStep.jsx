import c from './steps.module.css';
import { useStep } from './shared';

/* 32 */ export function ErrorStep() {
  const [i, set] = useStep(4, 2);
  return (
    <ol className={c.err} aria-label="Stepper with an error">
      {['Details', 'Address', 'Payment', 'Review'].map((t, k) => <li key={t} data-s={k < i ? (k === 1 ? 'bad' : 'done') : k === i ? 'now' : 'next'}><button type="button" aria-current={k === i ? 'step' : undefined} onClick={() => set(k)}><b>{k === 1 && k < i ? '!' : k + 1}</b><span>{t}{k === 1 && k < i ? ' — fix' : ''}</span></button></li>)}
    </ol>
  );
}
