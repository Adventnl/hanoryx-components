import { useDrag } from "../../../stage/hooks";
import c from "../patterns.module.css";
import { F, Rail } from "../shared";

/* 33 */ export function GridSize() {
  const [v, bind] = useDrag({ mode: 'x', init: 0.5 });
  const s = 8 + v * 28;
  return <div className={c.sw} style={{ backgroundImage: `linear-gradient(${F} 1px, transparent 1px), linear-gradient(90deg, ${F} 1px, transparent 1px)`, backgroundSize: `${s}px ${s}px` }}><Rail v={v} bind={bind} label="Grid size" /><small className={c.val}>{Math.round(s)}px</small></div>;
}
