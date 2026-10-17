import { rng } from "../../../stage/hooks";
import { useCell } from "../../../stage/chartKit";
import c from "../matrices.module.css";

/* 27 */ const PIVOT = (() => {
  const r = rng(27);
  return Array.from({ length: 4 }, () => Array.from({ length: 4 }, () => 5 + Math.floor(r() * 55)));
})();

const PIVOT_ROWS = PIVOT.map((row) => row.reduce((a, b) => a + b, 0));

const PIVOT_COLS = [0, 1, 2, 3].map((k) => PIVOT.reduce((a, row) => a + row[k], 0));

export function PivotTable() {
  const [at, bind] = useCell(4, 4);
  const [r, k] = at;
  return (
    <div className={c.box}>
      <div className={c.pivot}>
        <div className={c.pv} {...bind} aria-label="Pivot table, move over it or use the arrow keys">
          {PIVOT.map((row, i) => row.map((v, j) => <i key={`${i}-${j}`} data-hot={i === r || j === k} data-sel={i === r && j === k}>{v}</i>))}
        </div>
        <div className={c.pvTot} aria-hidden="true">{PIVOT_ROWS.map((v, i) => <i key={i} data-hot={i === r}>{v}</i>)}</div>
        <div className={c.pvFoot} aria-hidden="true">{PIVOT_COLS.map((v, j) => <i key={j} data-hot={j === k}>{v}</i>)}</div>
      </div>
      <output className={c.out}>{r < 0 ? 'Move over the table' : <>Cell <b>{PIVOT[r][k]}</b> · row {PIVOT_ROWS[r]} · column {PIVOT_COLS[k]}</>}</output>
    </div>
  );
}
