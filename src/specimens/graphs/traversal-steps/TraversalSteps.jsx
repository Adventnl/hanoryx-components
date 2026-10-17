import { useState } from 'react';
import c from "../graphs.module.css";

/* 22 */ const TRAV_N = [['A', 50, 10], ['B', 22, 34], ['C', 78, 34], ['D', 10, 62], ['E', 36, 62], ['F', 64, 62], ['G', 90, 62]];

const TRAV_ADJ = { 0: [1, 2], 1: [0, 3, 4], 2: [0, 5, 6], 3: [1], 4: [1], 5: [2], 6: [2] };

const traverse = (mode) => {
  const seen = [0];
  const todo = [0];
  while (todo.length) {
    const v = mode === 'BFS' ? todo.shift() : todo.pop();
    (mode === 'BFS' ? TRAV_ADJ[v] : [...TRAV_ADJ[v]].reverse()).forEach((w) => { if (!seen.includes(w)) { seen.push(w); todo.push(w); } });
  }
  return seen;
};

export function TraversalSteps() {
  const [mode, setMode] = useState('BFS');
  const [step, setStep] = useState(2);
  const order = traverse(mode);
  const done = order.slice(0, step);
  return (
    <div className={c.col}>
      <svg className={c.svg} viewBox="0 0 100 74" aria-hidden="true">
        {Object.entries(TRAV_ADJ).flatMap(([a, bs]) => bs.filter((b) => b > Number(a)).map((b) => <line key={`${a}-${b}`} className={c.edge} data-hot={done.includes(Number(a)) && done.includes(b)} x1={TRAV_N[a][1]} y1={TRAV_N[a][2]} x2={TRAV_N[b][1]} y2={TRAV_N[b][2]} />))}
        {TRAV_N.map(([n, x, y], i) => <g key={n} className={c.box} data-hot={done.includes(i)}><circle cx={x} cy={y} r="5" /><text x={x} y={y} textAnchor="middle" dominantBaseline="central">{n}</text></g>)}
      </svg>
      <div className={c.pair}>
        <button type="button" aria-pressed={mode === 'BFS'} onClick={() => { setMode('BFS'); setStep(1); }}>BFS</button>
        <button type="button" aria-pressed={mode === 'DFS'} onClick={() => { setMode('DFS'); setStep(1); }}>DFS</button>
        <button type="button" onClick={() => setStep((s) => (s >= 7 ? 1 : s + 1))}>Step</button>
      </div>
      <p className={c.sub}>{done.map((i) => TRAV_N[i][0]).join(' → ')}</p>
    </div>
  );
}
