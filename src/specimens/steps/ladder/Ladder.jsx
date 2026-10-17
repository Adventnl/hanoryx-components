import c from "../steps.module.css";
import { useStep } from "../shared";

/* 27 */ export function Ladder() {
  const [i, set] = useStep(5, 3);
  return (
    <ol className={c.ladder} aria-label="Ladder">
      {[4, 3, 2, 1, 0].map((k) => <li key={k} data-on={k <= i}><button type="button" aria-current={k === i ? 'step' : undefined} onClick={() => set(k)}>Rung {k + 1}</button></li>)}
    </ol>
  );
}
