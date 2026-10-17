import { useDrag } from "../../../stage/hooks";
import c from "../dials.module.css";

/* 3 */ export function ConcentricPair() {
  const [a, bindA] = useDrag({ mode: 'r', init: 0.3 });
  const [b, bindB] = useDrag({ mode: 'r', init: 0.7 });
  return (
    <div className={c.concentric}>
      <div className={c.outer} {...bindA} aria-label="Outer ring" style={{ ...bindA.style, '--v': a }}><i /></div>
      <div className={c.inner} {...bindB} aria-label="Inner knob" style={{ ...bindB.style, '--v': b }}><i /></div>
    </div>
  );
}
