import { useDrag } from "../../../stage/hooks";
import c from "../kinetic.module.css";

/* 27 */ export function SlantDial() {
  const [v, bind] = useDrag({ init: 0.62 });
  return (
    <div className={c.fig}>
      <p className={c.slant} style={{ '--v': v }}>SLANT</p>
      <div className={c.slide} {...bind} aria-label="Slant, drag to lean the word" style={{ ...bind.style, '--v': v }}><i /></div>
    </div>
  );
}
