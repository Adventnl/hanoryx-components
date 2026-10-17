import { usePoint } from "../../../stage/chartKit";
import c from "../tilt.module.css";
import { lean } from "../shared";

export function LayerParallax() {
  const [p, bind] = usePoint();
  const { x, y } = lean(p);
  const at = (d) => ({ transform: `translate(${(x * d).toFixed(1)}px, ${(y * d).toFixed(1)}px)` });
  return (
    <div className={c.fig}>
      <div {...bind} className={c.stage} aria-label="Layers that shift at different depths">
        <div className={`${c.card} ${c.layers}`}>
          <span className={c.l0} style={at(-4)} />
          <span className={c.l1} style={at(8)} />
          <span className={c.l2} style={at(16)} />
          <b className={c.l3} style={at(26)}>Depth</b>
        </div>
      </div>
    </div>
  );
}
