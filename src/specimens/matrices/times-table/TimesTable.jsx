import { useCell } from "../../../stage/chartKit";
import c from "../matrices.module.css";

/* 4 */ const NINE = Array.from({ length: 9 }, (_, i) => i + 1);

export function TimesTable() {
  const [at, bind] = useCell(9, 9);
  const [r, k] = at;
  return (
    <div className={c.box}>
      <div className={c.tt} {...bind} aria-label="Times table, move over it or use the arrow keys">
        {NINE.map((a, i) => NINE.map((b, j) => <i key={`${i}-${j}`} data-hot={i === r || j === k} data-sel={i === r && j === k}>{a * b}</i>))}
      </div>
      <output className={c.out}>{r < 0 ? 'Move over the table' : <>{r + 1} × {k + 1} = <b>{(r + 1) * (k + 1)}</b></>}</output>
    </div>
  );
}
