import { useDrag } from '../../stage/hooks';
import { Ico } from '../../stage/icons';
import c from './waypoints.module.css';

/* 4 */ export function BackToTopRing() {
  const [v, bind] = useDrag({ init: 0.6 });
  return (
    <div className={c.top}>
      <button type="button" aria-label={`Back to top, ${Math.round(v * 100)} percent read`} style={{ '--v': v }}><svg className={c.ringSvg} viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="17" /><circle cx="20" cy="20" r="17" pathLength="1" /></svg><Ico n="up" /></button>
      <div className={c.topSlide} {...bind} aria-label="Reading progress" style={{ ...bind.style, '--v': v }}><i /></div>
    </div>
  );
}
