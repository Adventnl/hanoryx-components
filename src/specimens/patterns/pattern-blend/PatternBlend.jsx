import { useDrag } from "../../../stage/hooks";
import c from "../patterns.module.css";
import { F, Rail } from "../shared";

/* 36 */ export function PatternBlend() {
  const [v, bind] = useDrag({ mode: 'x', init: 0.5 });
  return (
    <div className={c.sw}>
      <i className={c.layer} style={{ backgroundImage: `radial-gradient(${F} 1.2px, transparent 1.8px)`, backgroundSize: '12px 12px' }} />
      <i className={c.layer} style={{ backgroundImage: `repeating-linear-gradient(45deg, ${F} 0 1px, transparent 1px 7px)`, mask: `linear-gradient(90deg, #000 ${v * 100 - 10}%, transparent ${v * 100 + 10}%)` }} />
      <Rail v={v} bind={bind} label="Blend between dots and hatching" />
    </div>
  );
}
