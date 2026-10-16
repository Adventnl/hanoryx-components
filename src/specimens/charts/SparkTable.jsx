import c from './charts.module.css';
import { curve, pts, series, smooth3, useScan } from './shared';

/* 35 */ const SPARK = [['Alpha', 181], ['Beta', 182], ['Gamma', 183], ['Delta', 184], ['Epsilon', 185]].map(([n, s]) => {
  const v = smooth3(series(12, s, 0.1, 0.95));
  return { n, d: curve(pts(v, 40, 12, 1)), delta: Math.round((v[11] - v[0]) * 100) };
});

export function SparkTable() {
  const [i, bind] = useScan(5, { axis: 'y', label: (k) => `${SPARK[k].n}: ${SPARK[k].delta} points` });
  return (
    <div className={c.spark} {...bind} aria-label="Spark table, move down the rows">
      {SPARK.map((r, k) => (
        <p key={r.n} data-hot={k === i} data-up={r.delta >= 0}><em>{r.n}</em><svg viewBox="0 0 40 12" aria-hidden="true"><path d={r.d} /></svg><b>{r.delta > 0 ? '+' : ''}{r.delta}</b></p>
      ))}
    </div>
  );
}
