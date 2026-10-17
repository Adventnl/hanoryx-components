import { Ico } from "../../../stage/components/icons/icons";
import c from "../steps.module.css";
import { useStep } from "../shared";

/* 5 */ export function IconStepper() {
  const [i, set] = useStep(4, 0);
  return (
    <ol className={c.icons} aria-label="Icon stepper">
      {[['user', 'You'], ['folder', 'Files'], ['gear', 'Setup'], ['check', 'Done']].map(([n, t], k) => <li key={t} data-s={k < i ? 'done' : k === i ? 'now' : 'next'}><button type="button" aria-current={k === i ? 'step' : undefined} onClick={() => set(k)}><Ico n={n} /><span>{t}</span></button></li>)}
    </ol>
  );
}
