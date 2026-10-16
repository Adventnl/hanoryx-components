import { useDrag } from '../../stage/hooks';
import c from './patterns.module.css';
import { F, Rail } from './shared';

/* 32 */ export function HatchAngle() {
  const [v, bind] = useDrag({ mode: 'x', init: 0.25 });
  return <div className={c.sw} style={{ backgroundImage: `repeating-linear-gradient(${v * 180}deg, ${F} 0 1px, transparent 1px 8px)` }}><Rail v={v} bind={bind} label="Hatch angle" /><small className={c.val}>{Math.round(v * 180)}°</small></div>;
}
