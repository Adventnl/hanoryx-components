import { useDrag } from '../../stage/hooks';
import c from './signals.module.css';

/* 27 */ export function HeatLadder() {
  const [v, bind] = useDrag({ mode: 'y', init: 0.5, steps: 8 });
  const n = Math.round(v * 8);
  return <div className={c.ladder} {...bind} aria-label="Temperature" aria-valuetext={`${30 + n * 10} degrees`} style={bind.style}>{Array.from({ length: 8 }, (_, k) => <i key={k} data-on={7 - k < n} style={{ '--k': 7 - k }} />)}</div>;
}
