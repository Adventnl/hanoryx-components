import { usePoint } from "../../../stage/chartKit";
import c from "../tilt.module.css";
import { lean } from "../shared";

export function SlabEdge() {
  const [p, bind] = usePoint();
  const { x, y } = lean(p);
  return (
    <div className={c.fig}>
      <div {...bind} className={c.stage} aria-label="A thick slab that turns toward the pointer">
        <div className={c.slab} style={{ transform: `rotateY(${(x * 26).toFixed(1)}deg) rotateX(${(-y * 20).toFixed(1)}deg)` }}>
          {Array.from({ length: 9 }, (_, i) => <i key={i} style={{ '--i': i }} />)}
          <b>Slab</b>
        </div>
      </div>
    </div>
  );
}
