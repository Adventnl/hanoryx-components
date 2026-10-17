import c from "../steps.module.css";
import { useStep } from "../shared";

/* 40 */ export function SkipSteps() {
  const [i, set] = useStep(6, 0);
  return (
    <div className={c.skip}>
      <div role="group" aria-label="Skip steps">{[0, 1, 2, 3, 4, 5].map((k) => <button key={k} type="button" aria-label={`Go to step ${k + 1}`} aria-current={k === i ? 'step' : undefined} data-on={k === i} onClick={() => set(k)}>{k + 1}</button>)}</div>
      <p><button type="button" disabled={i === 0} onClick={() => set(0)}>« First</button><button type="button" disabled={i === 5} onClick={() => set(5)}>Last »</button></p>
    </div>
  );
}
