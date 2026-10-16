import { useDrag } from '../../stage/hooks';
import c from './signals.module.css';

/* 3 */ export function LevelLEDs() {
  const [v, bind] = useDrag({ init: 0.6, steps: 5 });
  const n = Math.round(v * 5);
  return <div className={c.bar5} {...bind} aria-label="Level" aria-valuetext={`${n} of 5`} style={{ ...bind.style, '--n': n }}>{[1, 2, 3, 4, 5].map((k) => <i key={k} data-on={k <= n} style={{ '--k': k }} />)}</div>;
}
