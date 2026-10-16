import { useState } from 'react';
import { polar, f1 } from '../../stage/chartKit';
import c from './graphs.module.css';
import { Box, Legend } from './shared';

/* 4 */ const MIND = [['Ideas', ['alpha', 'beta']], ['Tasks', ['one', 'two']], ['People', ['a', 'b']], ['Notes', ['x', 'y']], ['Links', ['p', 'q']], ['Dates', ['m', 'n']]];

export function MindMap() {
  const [hot, setHot] = useState(-1);
  return (
    <div className={c.col} data-hot={hot}>
      <svg className={c.svg} viewBox="0 0 100 80" aria-hidden="true">
        {MIND.map(([name, subs], i) => {
          const a = i * 60 + 30;
          const [bx, by] = polar(50, 40, 20, a);
          return (
            <g key={name} className={c.branch} data-hot={hot === i}>
              <path className={c.edge} d={`M50 40Q${f1((50 + bx) / 2 + (by - 40) * 0.18)} ${f1((40 + by) / 2 - (bx - 50) * 0.18)} ${bx} ${by}`} />
              {subs.map((s, k) => { const [sx, sy] = polar(50, 40, 35, a + (k - 0.5) * 24); return <g key={s}><path className={c.edge} d={`M${bx} ${by}L${sx} ${sy}`} /><circle className={c.nd} cx={sx} cy={sy} r="1.5" /><text className={c.tx} x={sx} y={sy + 4.2} textAnchor="middle">{s}</text></g>; })}
              <Box x={bx} y={by} w={11} label={name} hot={hot === i} />
            </g>
          );
        })}
        <circle className={c.core} cx="50" cy="40" r="4" />
      </svg>
      <Legend items={MIND.map(([n]) => n)} hot={hot} setHot={setHot} />
    </div>
  );
}
