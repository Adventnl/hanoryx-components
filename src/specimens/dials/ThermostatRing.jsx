import { useDrag } from '../../stage/hooks';
import c from './dials.module.css';

/* 22 */ export function ThermostatRing() {
  const [v, bind] = useDrag({ mode: 'r', range: 280, init: 0.45 });
  return (
    <div className={c.thermo} {...bind} aria-label="Thermostat ring" style={{ ...bind.style, '--v': v }}>
      <svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="42" pathLength="1" /><circle className={c.fill} cx="50" cy="50" r="42" pathLength="1" style={{ strokeDasharray: `${v * 0.78} 1` }} /></svg>
      <span>{(16 + v * 12).toFixed(1)}°</span>
    </div>
  );
}
