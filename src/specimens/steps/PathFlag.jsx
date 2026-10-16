import { useDrag } from '../../stage/hooks';
import c from './steps.module.css';

/* 23 */ export function PathFlag() {
  const [v, bind] = useDrag({ init: 0.3 });
  return (
    <div className={c.flag} {...bind} aria-label="Path position" style={{ ...bind.style, '--v': v }}>
      <svg viewBox="0 0 100 30" preserveAspectRatio="none" aria-hidden="true"><path d="M2 24C20 4 30 4 46 18S78 28 98 6" className={c.fbase} /><path d="M2 24C20 4 30 4 46 18S78 28 98 6" pathLength="1" className={c.fdraw} /></svg>
      <i aria-hidden="true" />
    </div>
  );
}
