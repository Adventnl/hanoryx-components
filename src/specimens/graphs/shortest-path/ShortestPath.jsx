import { useState } from 'react';
import c from "../graphs.module.css";

/* 23 */ const SP_G = [['A', 10, 40], ['B', 32, 14], ['C', 32, 66], ['D', 58, 40], ['E', 80, 14], ['F', 80, 66], ['G', 94, 40]];

const SP_W = [[0, 1, 4], [0, 2, 2], [1, 3, 5], [2, 3, 8], [1, 4, 10], [2, 5, 3], [3, 4, 2], [3, 6, 7], [5, 6, 4], [4, 6, 3]];

const dijkstra = (from, to) => {
  const dist = SP_G.map(() => Infinity);
  const prev = SP_G.map(() => -1);
  const todo = SP_G.map((_, i) => i);
  dist[from] = 0;
  while (todo.length) {
    todo.sort((a, b) => dist[a] - dist[b]);
    const u = todo.shift();
    SP_W.forEach(([a, b, w]) => { const [x, y] = a === u ? [a, b] : b === u ? [b, a] : [-1, -1]; if (x >= 0 && dist[x] + w < dist[y]) { dist[y] = dist[x] + w; prev[y] = x; } });
  }
  const path = [to];
  while (path[0] !== from && prev[path[0]] >= 0) path.unshift(prev[path[0]]);
  return { path, cost: dist[to] };
};

export function ShortestPath() {
  const [pair, setPair] = useState([0, 6]);
  const { path, cost } = dijkstra(pair[0], pair[1]);
  const on = (a, b) => path.some((p, i) => i && ((path[i - 1] === a && p === b) || (path[i - 1] === b && p === a)));
  return (
    <div className={c.col}>
      <svg className={c.svg} viewBox="0 0 100 80" aria-hidden="true">
        {SP_W.map(([a, b, w], i) => (
          <g key={i}><line className={c.edge} data-hot={on(a, b)} x1={SP_G[a][1]} y1={SP_G[a][2]} x2={SP_G[b][1]} y2={SP_G[b][2]} /><text className={c.tx} x={(SP_G[a][1] + SP_G[b][1]) / 2} y={(SP_G[a][2] + SP_G[b][2]) / 2 - 1.5} textAnchor="middle">{w}</text></g>
        ))}
        {SP_G.map(([n, x, y], i) => <g key={n} className={c.box} data-hot={path.includes(i)}><circle cx={x} cy={y} r="4.6" /><text x={x} y={y} textAnchor="middle" dominantBaseline="central">{n}</text></g>)}
      </svg>
      <div className={c.pair}>
        <button type="button" onClick={() => setPair(([a, b]) => [(a + 1) % 7 === b ? (a + 2) % 7 : (a + 1) % 7, b])}>From {SP_G[pair[0]][0]}</button>
        <button type="button" onClick={() => setPair(([a, b]) => [a, (b + 1) % 7 === a ? (b + 2) % 7 : (b + 1) % 7])}>To {SP_G[pair[1]][0]}</button>
      </div>
      <p className={c.sub}>cost <b>{cost}</b> · {path.map((i) => SP_G[i][0]).join(' → ')}</p>
    </div>
  );
}
