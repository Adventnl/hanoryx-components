import { useDrag } from '../../stage/hooks';
import c from './dials.module.css';

/* 7 */ export function TuningDial() {
  const [v, bind] = useDrag({ init: 0.45 });
  return (
    <div className={c.tuning} {...bind} aria-label="Tuning dial" style={{ ...bind.style, '--v': v }}>
      <ol>{[88, 92, 96, 100, 104, 108].map((n) => <li key={n}>{n}</li>)}</ol>
      <i /><span>FM {(88 + v * 20).toFixed(1)}</span>
    </div>
  );
}
