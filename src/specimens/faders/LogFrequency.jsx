import { useDrag } from '../../stage/hooks';
import c from './faders.module.css';

/* 6 */ export function LogFrequency() {
  const [v, bind] = useDrag({ init: 0.5 });
  const hz = Math.round(20 * Math.pow(1000, v));
  return (
    <div className={c.log}>
      <div {...bind} aria-label="Frequency" style={{ ...bind.style, '--v': v }}><i /></div>
      <p><span>20</span><span>200</span><span>2k</span><span>20k</span></p>
      <output>{hz >= 1000 ? `${(hz / 1000).toFixed(1)} kHz` : `${hz} Hz`}</output>
    </div>
  );
}
