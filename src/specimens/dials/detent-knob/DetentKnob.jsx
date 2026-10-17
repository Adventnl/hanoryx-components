import { useDrag } from "../../../stage/hooks";
import c from "../dials.module.css";

/* 1 */ export function DetentKnob() {
  const [v, bind] = useDrag({ mode: 'r', steps: 11, init: 0.36 });
  return (
    <div className={c.detent} style={{ '--v': v }}>
      {Array.from({ length: 12 }, (_, i) => <i key={i} style={{ '--i': i }} data-on={i / 11 <= v + 0.001} />)}
      <div className={c.knob} {...bind} aria-label="Detent knob"><b /></div>
    </div>
  );
}
