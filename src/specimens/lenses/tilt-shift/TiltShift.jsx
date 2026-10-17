import { useDrag } from "../../../stage/hooks";
import c from "../lenses.module.css";
import { Scene } from "../shared";

/* 40 */ export function TiltShift() {
  const [v, bind] = useDrag({ mode: 'y', init: 0.5 });
  return (
    <div className={`${c.area} ${c.tilt}`} {...bind} aria-label="Tilt shift band" aria-valuetext={`${Math.round((1 - v) * 100)} percent`} style={{ ...bind.style, '--v': 1 - v }}>
      <Scene className={c.fill} /><div className={c.bandTop} /><div className={c.bandBottom} />
    </div>
  );
}
