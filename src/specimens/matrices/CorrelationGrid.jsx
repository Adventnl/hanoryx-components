import { useCell } from '../../stage/chartKit';
import c from './matrices.module.css';
import { AXIS6 } from './shared';

const CORR = Array.from({ length: 6 }, (_, i) => Array.from({ length: 6 }, (_, j) => (i === j ? 1 : +Math.cos((i + 1) * (j + 1) * 0.9 + i + j).toFixed(2))));

export function CorrelationGrid() {
  const [at, bind] = useCell(6, 6);
  const [r, k] = at;
  return (
    <div className={c.box}>
      <div className={c.cg} {...bind} aria-label="Correlation grid, move over it or use the arrow keys">
        {CORR.map((row, i) => row.map((v, j) => <i key={`${i}-${j}`} style={{ '--r': Math.abs(v) }} data-neg={v < 0} data-hot={i === r || j === k} data-sel={i === r && j === k} />))}
      </div>
      <output className={c.out}>{r < 0 ? 'Move over the grid' : <>{AXIS6[r]} × {AXIS6[k]} · <b>{CORR[r][k].toFixed(2)}</b></>}</output>
    </div>
  );
}
