import { usePoint } from '../../stage/chartKit';
import c from './tilt.module.css';
import { lean } from './shared';

export function FoilCard() {
  const [p, bind] = usePoint();
  const { x, y } = lean(p);
  return (
    <div className={c.fig}>
      <div {...bind} className={c.stage} aria-label="A foil card whose colour follows the pointer">
        <div className={`${c.card} ${c.foil}`} style={{ transform: `rotateY(${(x * 10).toFixed(1)}deg) rotateX(${(-y * 10).toFixed(1)}deg)`, '--a': `${(x * 90 + 200).toFixed(0)}deg`, '--gx': `${p ? p.x : 50}%`, '--gy': `${p ? p.y : 50}%` }}><b>Foil</b></div>
      </div>
    </div>
  );
}
