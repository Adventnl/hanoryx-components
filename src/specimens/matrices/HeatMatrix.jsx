import { rng } from '../../stage/hooks';
import { useCell } from '../../stage/chartKit';
import c from './matrices.module.css';

/* 1 */ const HEAT = (() => {
  const r = rng(5);
  return Array.from({ length: 6 }, () => Array.from({ length: 10 }, () => r()));
})();

export function HeatMatrix() {
  const [at, bind] = useCell(6, 10);
  const [r, k] = at;
  return (
    <div className={c.box}>
      <div className={c.hm} {...bind} aria-label="Heat matrix, move over it or use the arrow keys">
        {HEAT.map((row, i) => row.map((v, j) => <i key={`${i}-${j}`} style={{ '--v': v }} data-hot={i === r || j === k} data-sel={i === r && j === k} />))}
      </div>
      <output className={c.out}>{r < 0 ? 'Move over the matrix' : <>R{r + 1} · C{k + 1} · <b>{HEAT[r][k].toFixed(2)}</b></>}</output>
    </div>
  );
}
