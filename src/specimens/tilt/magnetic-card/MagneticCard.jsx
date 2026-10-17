import { usePoint } from "../../../stage/chartKit";
import c from "../tilt.module.css";
import { lean } from "../shared";

export function MagneticCard() {
  const [p, bind] = usePoint();
  const { x, y } = lean(p);
  return (
    <div className={c.fig}>
      <div {...bind} className={c.stage} aria-label="A card that leans toward the pointer">
        <div className={`${c.card} ${c.mag}`} style={{ transform: `translate(${(x * 14).toFixed(1)}px, ${(y * 10).toFixed(1)}px) scale(${p ? 1.04 : 1})` }}><b>Magnet</b><span>follows, slowly</span></div>
      </div>
    </div>
  );
}
