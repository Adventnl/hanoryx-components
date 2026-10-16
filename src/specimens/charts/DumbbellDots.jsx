import c from './charts.module.css';
import { useScan } from './shared';

/* 21 */ const DUMB = [[22, 61], [35, 52], [18, 74], [44, 49], [28, 83], [51, 68]];

export function DumbbellDots() {
  const [i, bind] = useScan(6, { axis: 'y', label: (k) => `Row ${k + 1}: ${DUMB[k][0]} to ${DUMB[k][1]}` });
  return (
    <div className={c.ch} {...bind} aria-label="Dumbbell dots, move down the rows">
      <svg viewBox="0 0 100 52" aria-hidden="true">
        {DUMB.map(([a, b], k) => {
          const y = 5 + k * 8.4;
          return <g key={k} className={c.dumb} data-hot={k === i}><line className={c.hair} x1="4" x2="96" y1={y} y2={y} /><line x1={a} x2={b} y1={y} y2={y} /><circle cx={a} cy={y} r="2" /><circle className={c.end} cx={b} cy={y} r="2" /></g>;
        })}
      </svg>
      <output className={c.out}>{i < 0 ? 'Move down the rows' : <><b>{DUMB[i][0]}</b> → <b>{DUMB[i][1]}</b></>}</output>
    </div>
  );
}
