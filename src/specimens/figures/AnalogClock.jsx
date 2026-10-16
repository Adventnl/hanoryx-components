import { useTick } from '../../stage/hooks';
import { polar } from '../../stage/chartKit';
import c from './figures.module.css';

/* 16 */ export function AnalogClock() {
  const n = useTick(1000);
  const s = 10 * 3600 + 8 * 60 + 30 + n;
  return (
    <div className={c.fig}>
      <div className={c.analog} role="img" aria-label="An analog clock" style={{ '--s': `${s * 6}deg`, '--m': `${(s / 60) * 6}deg`, '--h': `${(s / 3600) * 30}deg` }}>
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <circle className={c.face} cx="50" cy="50" r="47" />
          {Array.from({ length: 60 }, (_, i) => { const [x1, y1] = polar(50, 50, 45, i * 6); const [x2, y2] = polar(50, 50, i % 5 ? 42.5 : 40, i * 6); return <line key={i} className={i % 5 ? c.minor : c.major} x1={x1} y1={y1} x2={x2} y2={y2} />; })}
          {Array.from({ length: 12 }, (_, i) => { const [x, y] = polar(50, 50, 33, (i + 1) * 30); return <text key={i} x={x} y={y} textAnchor="middle" dominantBaseline="central">{i + 1}</text>; })}
          <g className={c.hHand}><path d="M50 26 V54" /></g>
          <g className={c.mHand}><path d="M50 14 V54" /></g>
          <g className={c.sHand}><path d="M50 10 V60" /></g>
          <circle className={c.pin} cx="50" cy="50" r="2.4" />
        </svg>
      </div>
    </div>
  );
}
