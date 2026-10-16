import { Ico } from '../../stage/icons';
import c from './steps.module.css';
import { useStep } from './shared';

/* 3 */ export function VerticalStepper() {
  const [i, set] = useStep(3, 1);
  const rows = [['Account', 'Name and mail'], ['Workspace', 'Pick a name'], ['Invite', 'Add the team']];
  return (
    <ol className={c.vert} aria-label="Vertical stepper">
      {rows.map(([t, d], k) => <li key={t} data-s={k < i ? 'done' : k === i ? 'now' : 'next'}><button type="button" aria-current={k === i ? 'step' : undefined} onClick={() => set(k)}><i>{k < i ? <Ico n="check" /> : k + 1}</i><b>{t}</b>{k === i && <small>{d}</small>}</button></li>)}
    </ol>
  );
}
