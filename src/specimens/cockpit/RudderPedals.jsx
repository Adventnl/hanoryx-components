import { useDrag } from '../../stage/hooks';
import c from './cockpit.module.css';

/* 41 */ export function RudderPedals() {
  const [v, bind] = useDrag({ init: 0.5 });
  return (
    <div className={c.pedals} {...bind} aria-label="Rudder pedals" aria-valuetext={v > 0.55 ? 'right' : v < 0.45 ? 'left' : 'centre'} style={{ ...bind.style, '--v': v }}><span>L</span><i /><span>R</span></div>
  );
}
