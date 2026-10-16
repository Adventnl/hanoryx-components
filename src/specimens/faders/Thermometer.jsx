import { useDrag } from '../../stage/hooks';
import c from './faders.module.css';

/* 15 */ export function Thermometer() {
  const [v, bind] = useDrag({ mode: 'y', init: 0.55 });
  return (
    <div className={c.thermo} {...bind} aria-label="Thermometer" style={{ ...bind.style, '--v': v }}>
      <i /><b /><span>{Math.round(-10 + v * 50)}°</span>
    </div>
  );
}
