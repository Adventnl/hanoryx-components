import { useState } from 'react';
import c from './charts.module.css';
import { pct, series } from './shared';

/* 1 */ const COLS = series(8, 3);

export function ColumnChart() {
  const [k, setK] = useState(5);
  return (
    <div className={c.cols} role="group" aria-label="Column chart">
      <div className={c.bars}>
        {COLS.map((v, i) => (
          <button key={i} type="button" className={c.cb} aria-label={`Column ${i + 1}: ${pct(v)}`} aria-pressed={k === i} style={{ '--v': v, '--i': i }} onClick={() => setK(i)}><i /></button>
        ))}
      </div>
      <output className={c.out}>Column {k + 1} · <b>{pct(COLS[k])}</b></output>
    </div>
  );
}
