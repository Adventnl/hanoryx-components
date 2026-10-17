import { useState } from 'react';
import c from "../matrices.module.css";

/* 26 */ const PLANS = ['Basic', 'Plus', 'Max'];

const FEATURES = [['Search', [1, 1, 1]], ['Export', [0, 1, 1]], ['Share', [0, 1, 1]], ['Audit', [0, 0, 1]], ['Custom', [0, 0, 1]]];

export function PlanTable() {
  const [k, setK] = useState(1);
  return (
    <table className={c.plans}>
      <thead>
        <tr><th />{PLANS.map((p, i) => <th key={p} data-sel={k === i}><button type="button" aria-pressed={k === i} onClick={() => setK(i)}>{p}</button></th>)}</tr>
      </thead>
      <tbody>{FEATURES.map(([n, v]) => <tr key={n}><th scope="row">{n}</th>{v.map((x, i) => <td key={i} data-sel={k === i}>{x ? '✓' : '—'}</td>)}</tr>)}</tbody>
    </table>
  );
}
