import { useDrag } from "../../../stage/hooks";
import c from "../tilt.module.css";

export function CubeDrag() {
  const [v, bind] = useDrag({ mode: 'x', init: 0.12 });
  return (
    <div className={c.fig}>
      <div {...bind} className={`${c.stage} ${c.cubeStage}`} aria-label="Drag to turn the cube" style={{ ...bind.style }}>
        <div className={c.cube} style={{ transform: `rotateX(-22deg) rotateY(${(v * 360).toFixed(1)}deg)` }}>
          {['A', 'B', 'C', 'D'].map((f, i) => <i key={f} style={{ '--i': i }}>{f}</i>)}
          <i className={c.top} />
          <i className={c.bottom} />
        </div>
      </div>
    </div>
  );
}
