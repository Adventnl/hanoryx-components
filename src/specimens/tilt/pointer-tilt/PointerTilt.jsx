import { usePoint } from "../../../stage/chartKit";
import c from "../tilt.module.css";
import { lean } from "../shared";

/* ---------- 01 pointer and perspective ---------- */

export function PointerTilt() {
  const [p, bind] = usePoint();
  const { x, y } = lean(p);
  return (
    <div className={c.fig}>
      <div {...bind} className={c.stage} aria-label="A card that tilts toward the pointer">
        <div className={c.card} style={{ transform: `rotateY(${(x * 15).toFixed(1)}deg) rotateX(${(-y * 15).toFixed(1)}deg)`, '--gx': `${p ? p.x : 50}%`, '--gy': `${p ? p.y : 25}%` }}>
          <b>Tilt</b><span>toward the pointer</span><i className={c.glare} />
        </div>
      </div>
    </div>
  );
}
