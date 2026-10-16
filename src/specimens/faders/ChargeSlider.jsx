import { useDrag } from '../../stage/hooks';
import c from './faders.module.css';

/* 36 */ export function ChargeSlider() {
  const [v, bind] = useDrag({ init: 0.62, steps: 10 });
  return (
    <div className={c.charge} {...bind} aria-label="Charge level" style={{ ...bind.style, '--v': v }}>
      <div><i /></div><u /><span>{Math.round(v * 100)}%</span>
    </div>
  );
}
