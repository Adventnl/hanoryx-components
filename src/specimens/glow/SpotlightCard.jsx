import { usePoint } from '../../stage/chartKit';
import c from './glow.module.css';
import { light } from './shared';

/* ---------- 01 light that follows ---------- */

export function SpotlightCard() {
  const [p, bind] = usePoint();
  return (
    <div className={c.fig}>
      <div {...bind} className={`${c.card} ${c.spot}`} aria-label="A card with a spotlight that follows the pointer" style={{ ...bind.style, ...light(p) }}>
        <b>Spotlight</b><span>follows the pointer</span>
      </div>
    </div>
  );
}
