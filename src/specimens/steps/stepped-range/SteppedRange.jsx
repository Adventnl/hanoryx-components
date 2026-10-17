import { useDrag } from "../../../stage/hooks";
import c from "../steps.module.css";

/* 20 */ export function SteppedRange() {
  const [v, bind] = useDrag({ init: 0.5, steps: 5 });
  return (
    <div className={c.ticks} {...bind} aria-label="Stepped range" aria-valuetext={`Level ${Math.round(v * 5) + 1}`} style={{ ...bind.style, '--v': v }}>
      <i aria-hidden="true" />{[0, 1, 2, 3, 4, 5].map((k) => <u key={k} aria-hidden="true" data-on={k <= Math.round(v * 5)} />)}
      <output>{Math.round(v * 5) + 1}</output>
    </div>
  );
}
