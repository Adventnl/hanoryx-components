import c from './steps.module.css';
import { useStep } from './shared';

/* 15 */ export function WizardFooter() {
  const [i, set] = useStep(3, 0);
  return (
    <div className={c.wiz}>
      <p key={i}>{['Tell us who you are.', 'Choose how it looks.', 'Review and finish.'][i]}</p>
      <div><button type="button" disabled={i === 0} onClick={() => set(i - 1)}>Back</button><button type="button" onClick={() => set(i === 2 ? 0 : i + 1)}>{i === 2 ? 'Finish' : 'Continue'}</button></div>
    </div>
  );
}
