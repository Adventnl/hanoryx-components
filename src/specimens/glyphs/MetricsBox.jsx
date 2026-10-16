import { usePoint } from '../../stage/chartKit';
import c from './glyphs.module.css';

const MET = [['ascender', 15], ['cap height', 25], ['x-height', 49], ['baseline', 88], ['descender', 116]];

export function MetricsBox() {
  const [p, bind] = usePoint();
  const yv = p ? (p.y / 100) * 130 : -99;
  const near = p ? MET.reduce((best, m, i) => (Math.abs(m[1] - yv) < Math.abs(MET[best][1] - yv) ? i : best), 0) : -1;
  return (
    <div className={c.fig}>
      <div {...bind} className={c.metrics} aria-label="Type metrics; move over the letters to pick a line" style={{ ...bind.style }}>
        <svg viewBox="0 0 160 130" aria-hidden="true">
          {MET.map(([name, y], i) => (
            <g key={name} data-on={i === near}>
              <line x1="0" x2="160" y1={y} y2={y} />
              <text x="158" y={y - 2} textAnchor="end">{name}</text>
            </g>
          ))}
          <text className={c.metricsText} x="12" y="88">Hp</text>
        </svg>
      </div>
      <p className={c.note}>{near < 0 ? 'point at a line' : MET[near][0]}</p>
    </div>
  );
}
