import { usePoint } from '../../stage/chartKit';
import c from './passes.module.css';

/* 41 */
const PF_N = 28;

export function PerforationLens() {
  const [p, bind] = usePoint();
  const at = p ? (p.x / 100) * PF_N : -9;
  return (
    <div className={c.fig}>
      <div className={c.pf} {...bind} aria-label="Perforation line: move the pointer along it" style={{ ...bind.style, '--at': at.toFixed(2) }}>
        <span className={c.pfTop}><span className={c.kp}>Keep this half</span></span>
        <span className={c.pfLine}>{Array.from({ length: PF_N }, (_, i) => <i key={i} style={{ '--i': i }} />)}</span>
        <span className={c.pfBottom}><span className={c.kp}>Return this half</span></span>
      </div>
    </div>
  );
}
