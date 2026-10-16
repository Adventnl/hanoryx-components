import { useState } from 'react';
import c from './graphs.module.css';
import { Box, Legend } from './shared';

/* 5 */ const DEP_N = [['A', 12, 15], ['B', 12, 50], ['C', 12, 85], ['D', 45, 30], ['E', 45, 70], ['F', 80, 22], ['G', 80, 50], ['H', 80, 78]];

const DEP_E = [[0, 3], [1, 3], [1, 4], [2, 4], [3, 5], [3, 6], [4, 6], [4, 7]];

const reach = (start, edges, dir) => {
  const seen = new Set([start]);
  const stack = [start];
  while (stack.length) {
    const v = stack.pop();
    edges.forEach(([a, b]) => { const [from, to] = dir ? [a, b] : [b, a]; if (from === v && !seen.has(to)) { seen.add(to); stack.push(to); } });
  }
  return seen;
};

export function DependencyGraph() {
  const [hot, setHot] = useState(-1);
  const rel = hot < 0 ? new Set() : new Set([...reach(hot, DEP_E, true), ...reach(hot, DEP_E, false)]);
  return (
    <div className={c.col} data-hot={hot}>
      <svg className={c.svg} viewBox="0 0 100 100" aria-hidden="true">
        <defs><marker id="depArrow" viewBox="0 0 6 6" refX="5" refY="3" markerWidth="4" markerHeight="4" orient="auto"><path d="M0 0L6 3L0 6z" className={c.arrow} /></marker></defs>
        {DEP_E.map(([a, b], i) => <path key={i} className={c.edge} data-hot={rel.has(a) && rel.has(b)} markerEnd="url(#depArrow)" d={`M${DEP_N[a][1] + 6} ${DEP_N[a][2]}C${DEP_N[a][1] + 24} ${DEP_N[a][2]} ${DEP_N[b][1] - 24} ${DEP_N[b][2]} ${DEP_N[b][1] - 7} ${DEP_N[b][2]}`} />)}
        {DEP_N.map(([n, x, y], i) => <Box key={n} x={x} y={y} w={10} h={7} label={n} hot={rel.has(i)} />)}
      </svg>
      <Legend items={DEP_N.map(([n]) => `Node ${n}`)} hot={hot} setHot={setHot} />
    </div>
  );
}
