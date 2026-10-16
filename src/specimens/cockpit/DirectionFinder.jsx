import { polar } from '../../stage/chartKit';
import c from './cockpit.module.css';

/* 22 */ export function DirectionFinder() {
  return (
    <div className={c.adf} role="img" aria-label="Automatic direction finder sweeping">
      <svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="46" className={c.ring} />{Array.from({ length: 12 }, (_, k) => { const [x1, y1] = polar(50, 50, 46, k * 30); const [x2, y2] = polar(50, 50, 40, k * 30); return <line key={k} x1={x1} y1={y1} x2={x2} y2={y2} className={c.tickBig} />; })}</svg>
      <i /><b />
    </div>
  );
}
