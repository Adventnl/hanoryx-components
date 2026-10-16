import { useState } from 'react';
import c from './graphs.module.css';
import { Box } from './shared';

/* 36 */ const SEQ = ['Client', 'Server', 'Store'];

const SEQ_MSG = [[0, 1, 'request'], [1, 2, 'query'], [2, 1, 'rows'], [1, 0, 'response']];

export function SequenceDiagram() {
  const [k, setK] = useState(2);
  const X = (i) => 16 + i * 34;
  return (
    <div className={c.col}>
      <svg className={c.svg} viewBox="0 0 100 62" aria-hidden="true">
        {SEQ.map((n, i) => <g key={n}><Box x={X(i)} y={6} w={20} h={7} label={n} /><line className={c.edge} x1={X(i)} y1="10" x2={X(i)} y2="58" strokeDasharray="1.5 1.5" /></g>)}
        {SEQ_MSG.map(([a, b, t], i) => <g key={i} className={c.msg} data-on={i < k} data-now={i === k - 1}><line x1={X(a)} y1={22 + i * 11} x2={X(b)} y2={22 + i * 11} /><path d={`M${X(b) + (b > a ? -2.4 : 2.4)} ${22 + i * 11 - 1.6}L${X(b)} ${22 + i * 11}L${X(b) + (b > a ? -2.4 : 2.4)} ${22 + i * 11 + 1.6}`} /><text className={c.tx} x={(X(a) + X(b)) / 2} y={22 + i * 11 - 2} textAnchor="middle">{t}</text></g>)}
      </svg>
      <div className={c.pair}><button type="button" onClick={() => setK((v) => (v >= 4 ? 0 : v + 1))}>{k >= 4 ? 'Replay' : 'Next message'}</button></div>
    </div>
  );
}
