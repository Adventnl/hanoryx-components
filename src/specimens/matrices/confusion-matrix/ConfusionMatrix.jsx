import { useState } from 'react';
import { useCell } from "../../../stage/chartKit";
import c from "../matrices.module.css";
import { AXIS6 } from "../shared";

/* 3 */ const pctOf = (v, total) => Math.round((v / total) * 100);

const CONF = [[42, 5, 3], [6, 38, 6], [2, 7, 41]];

const CONF_SUM = CONF.flat().reduce((a, b) => a + b, 0);

export function ConfusionMatrix() {
  const [sel, setSel] = useState([1, 2]);
  const [at, bind] = useCell(3, 3, (r, k) => setSel([r, k]));
  const [r, k] = sel;
  return (
    <div className={c.box}>
      <div className={c.cmWrap}>
        <em>actual ↓ · predicted →</em>
        <div className={c.cm} {...bind} aria-label="Confusion matrix, click a cell">
          {CONF.map((row, i) => row.map((v, j) => <i key={`${i}-${j}`} style={{ '--v': v / 50 }} data-diag={i === j} data-sel={i === r && j === k} data-at={i === at[0] && j === at[1]}>{v}</i>))}
        </div>
      </div>
      <output className={c.out}>Actual {AXIS6[r]} · predicted {AXIS6[k]} · <b>{CONF[r][k]}</b> ({pctOf(CONF[r][k], CONF_SUM)}%)</output>
    </div>
  );
}
