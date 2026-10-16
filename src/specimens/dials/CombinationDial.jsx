import { useDrag } from '../../stage/hooks';
import c from './dials.module.css';

/* 8 */ export function CombinationDial() {
  const [v, bind] = useDrag({ mode: 'r', range: 360, init: 0.5 });
  return (
    <div className={c.combo} {...bind} aria-label="Combination dial" style={{ ...bind.style, '--v': v }}>
      <ol>{Array.from({ length: 20 }, (_, i) => <li key={i} style={{ '--i': i }}>{i * 2}</li>)}</ol>
      <b /><span>{Math.round(v * 39)}</span>
    </div>
  );
}
