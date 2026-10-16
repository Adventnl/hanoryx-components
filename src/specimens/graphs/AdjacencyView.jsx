import { useCell } from '../../stage/chartKit';
import c from './graphs.module.css';

/* 34 */ const ADJ_N = [[50, 12], [84, 34], [74, 72], [26, 72], [16, 34], [50, 44]];

const ADJ_E = [[0, 1], [0, 5], [1, 2], [2, 3], [3, 4], [4, 0], [5, 2], [5, 4]];

export function AdjacencyView() {
  const has = (a, b) => ADJ_E.some(([x, y]) => (x === a && y === b) || (x === b && y === a));
  const [at, bind] = useCell(6, 6);
  const link = at[0] >= 0 && has(at[0], at[1]);
  return (
    <div className={c.adj}>
      <svg viewBox="0 0 100 84" aria-hidden="true">
        {ADJ_E.map(([a, b], i) => <line key={i} className={c.edge} data-hot={at[0] >= 0 && ((a === at[0] && b === at[1]) || (a === at[1] && b === at[0]))} x1={ADJ_N[a][0]} y1={ADJ_N[a][1]} x2={ADJ_N[b][0]} y2={ADJ_N[b][1]} />)}
        {ADJ_N.map(([x, y], i) => <g key={i} className={c.box} data-hot={i === at[0] || i === at[1]}><circle cx={x} cy={y} r="5" /><text x={x} y={y} textAnchor="middle" dominantBaseline="central">{i + 1}</text></g>)}
      </svg>
      <div className={c.mx} {...bind} aria-label="Adjacency matrix, move over it or use the arrow keys">
        {Array.from({ length: 36 }, (_, i) => <i key={i} data-on={has(Math.floor(i / 6), i % 6)} data-sel={Math.floor(i / 6) === at[0] && i % 6 === at[1]} />)}
      </div>
      <p className={c.sub}>{at[0] < 0 ? 'Move over the matrix' : `${at[0] + 1} – ${at[1] + 1}: ${link ? 'linked' : 'no link'}`}</p>
    </div>
  );
}
