import { polar } from "../../../stage/chartKit";
import c from "../steps.module.css";
import { useStep } from "../shared";

/* 30 */ export function RingSteps() {
  const [i, set] = useStep(5, 2);
  const seg = Array.from({ length: 5 }, (_, k) => {
    const a0 = (k * 360) / 5 + 4;
    const a1 = ((k + 1) * 360) / 5 - 4;
    const [x0, y0] = polar(50, 50, 40, a0);
    const [x1, y1] = polar(50, 50, 40, a1);
    return `M${x0} ${y0}A40 40 0 0 1 ${x1} ${y1}`;
  });
  return (
    <div className={c.sring}>
      <svg viewBox="0 0 100 100" role="group" aria-label="Segment ring">{seg.map((d, k) => <path key={k} d={d} data-on={k <= i} tabIndex={0} role="button" aria-label={`Segment ${k + 1}`} aria-pressed={k === i} onClick={() => set(k)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); set(k); } }} />)}</svg>
      <output>{i + 1}/5</output>
    </div>
  );
}
