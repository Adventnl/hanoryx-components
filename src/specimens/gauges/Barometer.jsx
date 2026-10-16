import { useDrag } from '../../stage/hooks';
import c from './gauges.module.css';
import { Ticks, arc } from './shared';

/* 16 */ const WEATHER = [['STORMY', -72], ['RAIN', -36], ['CHANGE', 0], ['FAIR', 36], ['DRY', 72]];

export function Barometer() {
  const [v, bind] = useDrag({ init: 0.58 });
  return (
    <div className={c.baro} {...bind} aria-label="Barometer, drag to set the pressure" style={{ ...bind.style, '--v': v }}>
      <svg viewBox="0 0 100 60" aria-hidden="true">
        <path className={c.rail} d={arc(50, 50, 44, -90, 90)} />
        {WEATHER.map(([t, a]) => <text key={t} transform={`rotate(${a} 50 50)`} x="50" y="19" textAnchor="middle">{t}</text>)}
        <Ticks n={40} from={-90} to={90} r={47} len={2.4} major={10} majorLen={4} />
        <g className={c.nd}><path d="M50 14 L48.5 50 H51.5Z" /></g>
        <circle className={c.hub} cx="50" cy="50" r="4" />
      </svg>
      <output>{Math.round(960 + v * 80)} hPa</output>
    </div>
  );
}
