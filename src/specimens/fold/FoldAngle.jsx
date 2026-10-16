import { useDrag } from '../../stage/hooks';
import c from './fold.module.css';

export function FoldAngle() {
  const [v, bind] = useDrag({ mode: 'x', init: 0.35 });
  return (
    <div className={c.fig}>
      <div className={c.stage}>
        <div className={c.hinge} style={{ '--a': (v * 175).toFixed(1) }}>
          <i className={c.hl}><b>Left</b></i>
          <i className={c.hr}><b>Right</b></i>
        </div>
      </div>
      <div {...bind} className={c.track} aria-label="Fold angle" aria-valuetext={`${Math.round(v * 175)} degrees`} style={{ ...bind.style, '--v': v }}><i /></div>
    </div>
  );
}
