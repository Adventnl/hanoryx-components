import { useDrag } from "../../../stage/hooks";
import c from "../tilt.module.css";

export function DragTilt() {
  const [v, bind] = useDrag({ mode: 'x', init: 0.5 });
  return (
    <div className={c.fig}>
      <div className={c.stage}>
        <div {...bind} className={`${c.card} ${c.grab}`} aria-label="Drag across the card to turn it" style={{ ...bind.style, transform: `rotateY(${((v - 0.5) * 70).toFixed(1)}deg)` }}>
          <b>Turn</b><span>drag across</span>
        </div>
      </div>
    </div>
  );
}
