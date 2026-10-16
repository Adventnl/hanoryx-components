import { useDrag } from '../../stage/hooks';
import c from './dials.module.css';

/* 23 */ export function HeatRing() {
  const [v, bind] = useDrag({ mode: 'r', range: 360, init: 0.7 });
  return <div className={c.heat} {...bind} aria-label="Heat ring" style={{ ...bind.style, '--v': v }}><i /><span>{Math.round(v * 100)}%</span></div>;
}
