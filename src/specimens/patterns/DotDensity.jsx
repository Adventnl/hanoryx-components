import { useDrag } from '../../stage/hooks';
import c from './patterns.module.css';
import { F, Rail } from './shared';

/* 31 */ export function DotDensity() {
  const [v, bind] = useDrag({ mode: 'x', init: 0.4 });
  return <div className={c.sw} style={{ backgroundImage: `radial-gradient(${F} ${1 + v * 2}px, transparent ${1.6 + v * 2}px)`, backgroundSize: `${22 - v * 14}px ${22 - v * 14}px` }}><Rail v={v} bind={bind} label="Dot density" /></div>;
}
