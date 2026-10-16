import { usePoint } from '../../stage/chartKit';
import c from './glow.module.css';

const TRAIL = [0, 1, 2, 3, 4];

export function DotTrail() {
  const [p, bind] = usePoint();
  return (
    <div className={c.fig}>
      <div {...bind} className={c.trail} aria-label="Dots that trail the pointer, each a little later">
        {TRAIL.map((i) => <i key={i} style={{ left: `${p ? p.x : 50}%`, top: `${p ? p.y : 50}%`, '--i': i, opacity: p ? 1 - i * 0.18 : 0.2 }} />)}
      </div>
    </div>
  );
}
