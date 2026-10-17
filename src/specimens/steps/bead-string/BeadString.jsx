import c from "../steps.module.css";
import { useStep } from "../shared";

/* 38 */ export function BeadString() {
  const [i, set] = useStep(6, 2);
  return (
    <div className={c.beads} role="group" aria-label="Beads">
      <i aria-hidden="true" />
      {Array.from({ length: 6 }, (_, k) => <button key={k} type="button" aria-label={`Bead ${k + 1}`} aria-current={k === i ? 'step' : undefined} data-on={k <= i} onClick={() => set(k)} />)}
    </div>
  );
}
