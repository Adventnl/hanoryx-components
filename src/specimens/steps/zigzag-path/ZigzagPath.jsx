import c from "../steps.module.css";
import { useStep } from "../shared";

/* 37 */ export function ZigzagPath() {
  const [i, set] = useStep(5, 2);
  return (
    <ol className={c.zig} aria-label="Zigzag path">
      {[0, 1, 2, 3, 4].map((k) => <li key={k} data-s={k < i ? 'done' : k === i ? 'now' : 'next'} style={{ '--k': k }}><button type="button" aria-label={`Stop ${k + 1}`} aria-current={k === i ? 'step' : undefined} onClick={() => set(k)}>{k + 1}</button></li>)}
    </ol>
  );
}
