import { useState } from 'react';
import c from './matrices.module.css';

/* 25 */ const OPS = [['AND', (a, b) => a & b], ['OR', (a, b) => a | b], ['XOR', (a, b) => a ^ b], ['NAND', (a, b) => 1 - (a & b)]];

export function TruthTable() {
  const [k, setK] = useState(0);
  return (
    <div className={c.truth}>
      <div className={c.seg} role="group" aria-label="Operator">
        {OPS.map(([n], i) => <button key={n} type="button" aria-pressed={k === i} onClick={() => setK(i)}>{n}</button>)}
      </div>
      <table>
        <thead><tr><th>A</th><th>B</th><th>{OPS[k][0]}</th></tr></thead>
        <tbody>{[[0, 0], [0, 1], [1, 0], [1, 1]].map(([a, b]) => <tr key={`${a}${b}`}><td>{a}</td><td>{b}</td><td data-one={OPS[k][1](a, b) === 1}>{OPS[k][1](a, b)}</td></tr>)}</tbody>
      </table>
    </div>
  );
}
