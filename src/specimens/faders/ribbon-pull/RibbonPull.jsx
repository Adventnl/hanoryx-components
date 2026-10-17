import { useDrag } from "../../../stage/hooks";
import c from "../faders.module.css";

/* 19 */ export function RibbonPull() {
  const [v, bind] = useDrag({ init: 0.5 });
  return (
    <div className={c.ribbon} {...bind} aria-label="Ribbon pull" style={{ ...bind.style, '--v': v }}>
      <i /><b />
    </div>
  );
}
