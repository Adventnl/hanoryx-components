import { usePoint } from '../../stage/chartKit';
import c from './glow.module.css';

export function RimLight() {
  const [p, bind] = usePoint();
  const a = p ? (Math.atan2(p.y - 50, p.x - 50) * 180) / Math.PI + 90 : 200;
  return (
    <div className={c.fig}>
      <div {...bind} className={`${c.card} ${c.rim}`} aria-label="A card lit from the side the pointer is on" style={{ ...bind.style, '--a': `${a.toFixed(0)}deg` }}>
        <b>Rim</b><span>lit from the pointer</span>
      </div>
    </div>
  );
}
