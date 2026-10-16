import { useCell } from '../../stage/chartKit';
import c from './matrices.module.css';

/* 40 */ const MA = [[1, 2, 0], [0, 1, 3], [2, 0, 1]];

const MB = [[1, 0, 2], [3, 1, 0], [0, 2, 1]];

const MC = MA.map((row) => [0, 1, 2].map((k) => row.reduce((s, v, i) => s + v * MB[i][k], 0)));

export function ProductGrid() {
  const [at, bind] = useCell(3, 3);
  const [r, k] = at;
  return (
    <div className={c.box}>
      <div className={c.product}>
        <div className={c.mat}>{MA.map((row, i) => row.map((v, j) => <i key={`${i}-${j}`} data-hot={i === r}>{v}</i>))}</div>
        <span>×</span>
        <div className={c.mat}>{MB.map((row, i) => row.map((v, j) => <i key={`${i}-${j}`} data-hot={j === k}>{v}</i>))}</div>
        <span>=</span>
        <div className={c.mat} {...bind} aria-label="Product matrix, move over a cell to see how it is made">
          {MC.map((row, i) => row.map((v, j) => <i key={`${i}-${j}`} data-sel={i === r && j === k}>{v}</i>))}
        </div>
      </div>
      <output className={c.out}>{r < 0 ? 'Move over the result' : <>{MA[r].map((v, i) => `${v}×${MB[i][k]}`).join(' + ')} = <b>{MC[r][k]}</b></>}</output>
    </div>
  );
}
