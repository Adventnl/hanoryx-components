import { usePointer } from '../../stage/pointerVars';
import c from './cockpit.module.css';

/* ---- the others ---- */

/* 17 */ export function ArtificialHorizon() {
  const [ref, bind] = usePointer();
  return (
    <div ref={ref} className={c.horizon} role="application" aria-label="Attitude indicator. Move the pointer here, or use the arrow keys." tabIndex={0} {...bind}>
      <div className={c.sky}><i /><b /></div>
      <svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="47" className={c.ring} /><path d="M20 52h22l8 6 8-6h22M50 20v8" className={c.fixed} /></svg>
    </div>
  );
}
