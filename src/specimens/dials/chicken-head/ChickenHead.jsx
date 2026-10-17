import { useDrag } from "../../../stage/hooks";
import c from "../dials.module.css";

/* 2 */ export function ChickenHead() {
  const [v, bind] = useDrag({ mode: 'r', init: 0.62 });
  return <div className={c.chicken} {...bind} aria-label="Chicken-head knob" style={{ ...bind.style, '--v': v }}><i /><span>{Math.round(v * 10)}</span></div>;
}
