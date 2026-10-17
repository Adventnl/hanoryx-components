import c from "../progress.module.css";
import { run } from "../shared";

/* 5 */ export function LabelledSteps() {
  return (
    <div className={c.labelled} {...run('Labelled steps')}>
      <i />{['Plan', 'Build', 'Test', 'Ship'].map((t, k) => <span key={t} style={{ '--k': k }}>{t}</span>)}
    </div>
  );
}
