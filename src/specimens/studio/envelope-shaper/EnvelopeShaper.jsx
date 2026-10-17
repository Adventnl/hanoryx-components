import { useDrag } from "../../../stage/hooks";
import c from "../studio.module.css";

/* 22 */ export function EnvelopeShaper() {
  const [a, bA] = useDrag({ init: 0.2 });
  const [d, bD] = useDrag({ init: 0.35 });
  const [s, bS] = useDrag({ init: 0.6 });
  const [r, bR] = useDrag({ init: 0.4 });
  const x1 = 4 + a * 26;
  const x2 = x1 + 4 + d * 22;
  const y2 = 54 - s * 44;
  const x3 = 78;
  const x4 = x3 + 4 + r * 14;
  return (
    <div className={c.adsr}>
      <svg viewBox="0 0 100 60" aria-hidden="true"><path d={`M4 56 L${x1} 8 L${x2} ${y2} L${x3} ${y2} L${x4} 56`} className={c.trace} /></svg>
      <div>{[['A', a, bA], ['D', d, bD], ['S', s, bS], ['R', r, bR]].map(([n, v, b]) => <span key={n}><div {...b} aria-label={{ A: 'Attack', D: 'Decay', S: 'Sustain', R: 'Release' }[n]} aria-valuetext={`${Math.round(v * 100)} percent`} style={{ ...b.style, '--v': v }}><i /></div><small>{n}</small></span>)}</div>
    </div>
  );
}
