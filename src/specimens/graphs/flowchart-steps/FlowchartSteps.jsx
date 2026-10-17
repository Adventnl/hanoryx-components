import { useState } from 'react';
import c from "../graphs.module.css";
import { Box } from "../shared";

/* 7 */ const FLOW_N = [['Start', 50, 6], ['Read input', 50, 24], ['Valid?', 50, 44], ['Save', 22, 66], ['Show error', 78, 66], ['Done', 50, 90]];

const FLOW_E = [[0, 1], [1, 2], [2, 3], [2, 4], [3, 5], [4, 1]];

export function FlowchartSteps() {
  const [k, setK] = useState(0);
  const order = [0, 1, 2, 3, 5];
  const cur = order[k % order.length];
  return (
    <div className={c.col}>
      <svg className={c.svg} viewBox="0 0 100 100" aria-hidden="true">
        {FLOW_E.map(([a, b], i) => <path key={i} className={c.edge} data-hot={a === cur || (a === 2 && b === 3 && cur === 3)} d={a === 4 && b === 1 ? 'M78 63V24H62' : `M${FLOW_N[a][1]} ${FLOW_N[a][2] + 3}L${FLOW_N[b][1]} ${FLOW_N[b][2] - 3}`} />)}
        {FLOW_N.map(([n, x, y], i) => (i === 2
          ? <g key={n} className={c.box} data-hot={cur === i}><polygon points={`${x},${y - 6} ${x + 12},${y} ${x},${y + 6} ${x - 12},${y}`} /><text x={x} y={y} textAnchor="middle" dominantBaseline="central">{n}</text></g>
          : <Box key={n} x={x} y={y} w={i === 1 ? 20 : 16} label={n} hot={cur === i} />))}
      </svg>
      <div className={c.pair}><button type="button" onClick={() => setK(k + 1)}>Step</button></div>
    </div>
  );
}
