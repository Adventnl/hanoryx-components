import { useState } from 'react';
import c from "../graphs.module.css";

/* 24 */ const SPAN_N = [[18, 14], [50, 8], [82, 18], [14, 52], [46, 44], [78, 56]];

const SPAN_E = [[0, 1, 3], [1, 2, 6], [0, 3, 2], [1, 4, 4], [2, 5, 5], [3, 4, 7], [4, 5, 1], [0, 4, 9]].sort((a, b) => a[2] - b[2]);

export function SpanningTree() {
  const [step, setStep] = useState(3);
  const parent = SPAN_N.map((_, i) => i);
  const find = (x) => (parent[x] === x ? x : find(parent[x]));
  const verdicts = SPAN_E.map(([a, b]) => { const ra = find(a); const rb = find(b); if (ra === rb) return false; parent[ra] = rb; return true; });
  return (
    <div className={c.col}>
      <svg className={c.svg} viewBox="0 0 100 66" aria-hidden="true">
        {SPAN_E.map(([a, b, w], i) => (
          <g key={i} className={c.sEdge} data-state={i >= step ? 'todo' : verdicts[i] ? 'kept' : 'skip'}>
            <line x1={SPAN_N[a][0]} y1={SPAN_N[a][1]} x2={SPAN_N[b][0]} y2={SPAN_N[b][1]} />
            <text className={c.tx} x={(SPAN_N[a][0] + SPAN_N[b][0]) / 2} y={(SPAN_N[a][1] + SPAN_N[b][1]) / 2 - 1.5} textAnchor="middle">{w}</text>
          </g>
        ))}
        {SPAN_N.map(([x, y], i) => <circle key={i} className={c.nd} cx={x} cy={y} r="3" />)}
      </svg>
      <div className={c.pair}><button type="button" onClick={() => setStep((s) => (s >= SPAN_E.length ? 0 : s + 1))}>{step >= SPAN_E.length ? 'Start over' : 'Next edge'}</button></div>
      <p className={c.sub}>{step === 0 ? 'no edges yet' : `edge ${step} ${verdicts[step - 1] ? 'kept' : 'skipped (it would close a loop)'}`}</p>
    </div>
  );
}
