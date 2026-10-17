import { usePoint } from "../../../stage/chartKit";
import c from "../tilt.module.css";
import { lean } from "../shared";

export function ShadowCaster() {
  const [p, bind] = usePoint();
  const { x, y } = lean(p);
  return (
    <div className={c.fig}>
      <div {...bind} className={c.stage} aria-label="A floating card whose shadow moves away from the pointer">
        <div className={`${c.card} ${c.cast}`} style={{ boxShadow: `${(-x * 22).toFixed(0)}px ${(-y * 22 + 26).toFixed(0)}px 26px -6px rgba(0, 0, 0, 0.9), ${(-x * 8).toFixed(0)}px ${(-y * 8 + 8).toFixed(0)}px 10px rgba(0, 0, 0, 0.5)` }}><b>Shadow</b><span>moves away from the light</span></div>
      </div>
    </div>
  );
}
