import { usePoint } from '../../stage/chartKit';
import c from './tilt.module.css';
import { lean } from './shared';

/* ---------- 03 glass, light and orbits ---------- */

export function GlassSlab() {
  const [p, bind] = usePoint();
  const { x } = lean(p);
  return (
    <div className={c.fig}>
      <div {...bind} className={`${c.stage} ${c.glassStage}`} aria-label="Frosted glass over coloured shapes">
        <i className={c.orb1} /><i className={c.orb2} />
        <div className={c.glass} style={{ transform: `translateX(${(x * 12).toFixed(1)}px)`, '--gx': `${p ? p.x : 40}%` }}><b>Glass</b></div>
      </div>
    </div>
  );
}
