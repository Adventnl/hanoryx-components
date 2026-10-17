import c from "../steps.module.css";
import { useStep } from "../shared";

/* 21 */ export function StepCards() {
  const [i, set] = useStep(3, 0);
  return (
    <ol className={c.cards} aria-label="Step cards">
      {['Plan', 'Build', 'Ship'].map((t, k) => <li key={t} data-s={k < i ? 'done' : k === i ? 'now' : 'next'}><button type="button" aria-current={k === i ? 'step' : undefined} onClick={() => set(k)}><small>0{k + 1}</small><b>{t}</b></button></li>)}
    </ol>
  );
}
