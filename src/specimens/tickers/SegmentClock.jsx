import { useTick, pad2 } from '../../stage/hooks';
import c from './tickers.module.css';

/* seven segments in a 10 x 18 box */
const SEG = {
  a: '1.4,0.8 8.6,0.8 7.4,2.2 2.6,2.2',
  b: '9.2,1.4 9.2,8.6 7.8,7.4 7.8,2.6',
  c: '9.2,9.4 9.2,16.6 7.8,15.4 7.8,10.6',
  d: '1.4,17.2 2.6,15.8 7.4,15.8 8.6,17.2',
  e: '0.8,9.4 2.2,10.6 2.2,15.4 0.8,16.6',
  f: '0.8,1.4 2.2,2.6 2.2,7.4 0.8,8.6',
  g: '1.4,9 2.6,7.8 7.4,7.8 8.6,9 7.4,10.2 2.6,10.2',
};

const LIT = ['abcdef', 'bc', 'abdeg', 'abcdg', 'bcfg', 'acdfg', 'acdefg', 'abc', 'abcdefg', 'abcdfg'];

const SEG_X = [0, 13, 30, 43, 60, 73];

export function SegmentClock() {
  const t = useTick(1000);
  const s = (86390 + t) % 86400;
  const h = Math.floor(s / 3600);
  const m = Math.floor(s / 60) % 60;
  const sec = s % 60;
  const digits = [Math.floor(h / 10), h % 10, Math.floor(m / 10), m % 10, Math.floor(sec / 10), sec % 10];
  return (
    <div className={c.fig} role="img" aria-label={`Seven-segment clock reading ${pad2(h)}:${pad2(m)}:${pad2(sec)}`}>
      <svg className={c.seg} viewBox="-2 -2 87 22" aria-hidden="true">
        {digits.map((d, i) => (
          <g key={i} transform={`translate(${SEG_X[i]} 0)`}>
            {Object.entries(SEG).map(([k, p]) => <polygon key={k} points={p} className={LIT[d].includes(k) ? c.segOn : c.segOff} />)}
          </g>
        ))}
        {[26.5, 56.5].map((x) => (
          <g key={x} className={c.colonDots}><circle cx={x} cy="6" r="1" /><circle cx={x} cy="12" r="1" /></g>
        ))}
      </svg>
    </div>
  );
}
