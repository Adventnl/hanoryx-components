import { usePoint } from '../../stage/chartKit';
import c from './glow.module.css';
import { light } from './shared';

export function XRayLens() {
  const [p, bind] = usePoint();
  return (
    <div className={c.fig}>
      <div {...bind} className={`${c.card} ${c.xray}`} aria-label="A card with a lens that shows its wireframe" style={{ ...bind.style, ...light(p, [60, 50]) }}>
        <b>Surface</b>
        <span className={c.wire} aria-hidden="true"><b>Wireframe</b></span>
      </div>
    </div>
  );
}
