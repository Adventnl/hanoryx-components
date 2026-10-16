import c from './charts.module.css';
import { f1, pct, series, useScan } from './shared';

/* 20 */ const LOLLI = series(10, 101, 0.2, 0.95);

export function LollipopChart() {
  const [i, bind] = useScan(10, { label: (k) => `Item ${k + 1}: ${pct(LOLLI[k])}` });
  return (
    <div className={c.ch} {...bind} aria-label="Lollipop chart, move across the stems">
      <svg viewBox="0 0 100 52" aria-hidden="true">
        <path className={c.axis} d="M2 48H98" />
        {LOLLI.map((v, k) => {
          const x = 7 + k * 9.6;
          const y = f1(48 - v * 42);
          return <g key={k} className={c.pop} data-hot={k === i}><line x1={x} x2={x} y1="48" y2={y} /><circle cx={x} cy={y} r="2.4" /></g>;
        })}
      </svg>
      <output className={c.out}>{i < 0 ? 'Move across the stems' : <>Item {i + 1} · <b>{pct(LOLLI[i])}</b></>}</output>
    </div>
  );
}
