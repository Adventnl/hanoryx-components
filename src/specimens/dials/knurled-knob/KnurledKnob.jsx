import { useDrag } from "../../../stage/hooks";
import c from "../dials.module.css";

/* 11 */ export function KnurledKnob() {
  const [v, bind] = useDrag({ mode: 'r', init: 0.5 });
  return <div className={c.knurled} {...bind} aria-label="Knurled knob" style={{ ...bind.style, '--v': v }}><i /></div>;
}
