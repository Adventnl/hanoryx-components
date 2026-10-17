import { useDrag } from "../../../stage/hooks";
import c from "../tilt.module.css";

export function CoverFlow() {
  const [v, bind] = useDrag({ mode: 'x', init: 0.5 });
  const pos = v * 4;
  return (
    <div className={c.fig}>
      <div {...bind} className={`${c.stage} ${c.flowStage}`} aria-label="Drag to move along the row of cards" aria-valuetext={`Card ${Math.round(pos) + 1} of 5`} style={{ ...bind.style }}>
        {[0, 1, 2, 3, 4].map((i) => {
          const d = i - pos;
          return <i key={i} className={c.flowCard} style={{ transform: `translateX(${(d * 34).toFixed(1)}px) translateZ(${(-Math.abs(d) * 40).toFixed(0)}px) rotateY(${(Math.max(-1, Math.min(1, d)) * -52).toFixed(1)}deg)`, zIndex: 10 - Math.round(Math.abs(d) * 2) }}>{i + 1}</i>;
        })}
      </div>
    </div>
  );
}
