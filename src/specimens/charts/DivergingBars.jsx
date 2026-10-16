import c from './charts.module.css';
import { useScan } from './shared';

/* 42 */ const DIV = [-42, 18, 64, -12, 36, -58, 27];

export function DivergingBars() {
  const [i, bind] = useScan(7, { axis: 'y', label: (k) => `Row ${k + 1}: ${DIV[k]}` });
  return (
    <div className={c.div} {...bind} aria-label="Diverging bars, move down the rows">
      {DIV.map((v, k) => (
        <p key={k} data-hot={k === i} data-neg={v < 0}><span><i style={{ '--v': Math.abs(v) / 64 }} /></span><b>{v > 0 ? '+' : ''}{v}</b></p>
      ))}
    </div>
  );
}
