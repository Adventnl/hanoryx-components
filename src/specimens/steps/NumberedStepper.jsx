import { Ico } from '../../stage/icons';
import c from './steps.module.css';
import { useStep } from './shared';

/* 2 */ export function NumberedStepper() {
  const [i, set] = useStep(4, 2);
  return (
    <div className={c.col}>
      <ol className={c.nums} aria-label="Numbered stepper">{['Cart', 'Ship', 'Pay', 'Done'].map((t, k) => <li key={t} data-s={k < i ? 'done' : k === i ? 'now' : 'next'}><button type="button" aria-current={k === i ? 'step' : undefined} onClick={() => set(k)}><b>{k < i ? <Ico n="check" /> : k + 1}</b><span>{t}</span></button></li>)}</ol>
    </div>
  );
}
