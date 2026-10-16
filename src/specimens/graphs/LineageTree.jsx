import { useState } from 'react';
import c from './graphs.module.css';
import { Box, Legend, layoutTree } from './shared';

/* 41 */ const PED = layoutTree({ n: 'You', kids: [{ n: 'P1', kids: [{ n: 'G1', kids: [{ n: 'H1' }, { n: 'H2' }] }, { n: 'G2', kids: [{ n: 'H3' }, { n: 'H4' }] }] }, { n: 'P2', kids: [{ n: 'G3', kids: [{ n: 'H5' }, { n: 'H6' }] }, { n: 'G4', kids: [{ n: 'H7' }, { n: 'H8' }] }] }] });

export function LineageTree() {
  const [hot, setHot] = useState(-1);
  const X = (d) => 6 + (d.depth / 3) * 80;
  const Y = (d) => 5 + (d.x / (PED.leaves - 1)) * 50;
  const tops = PED.nodes.filter((d) => d.depth === 1);
  const inBranch = (d) => { let v = d; while (v && v.depth > 1) v = v.parent; return v; };
  return (
    <div className={c.col} data-hot={hot}>
      <svg className={c.svg} viewBox="0 0 100 62" aria-hidden="true">
        {PED.nodes.filter((d) => d.parent).map((d, i) => <path key={i} className={c.edge} data-hot={hot >= 0 && inBranch(d) === tops[hot]} d={`M${X(d.parent)} ${Y(d.parent)}C${(X(d.parent) + X(d)) / 2} ${Y(d.parent)} ${(X(d.parent) + X(d)) / 2} ${Y(d)} ${X(d)} ${Y(d)}`} />)}
        {PED.nodes.map((d, i) => <Box key={i} x={X(d) + 3} y={Y(d)} w={9} h={5} label={d.n.n} hot={hot >= 0 && (d === tops[hot] || inBranch(d) === tops[hot])} />)}
      </svg>
      <Legend items={['Side one', 'Side two']} hot={hot} setHot={setHot} />
    </div>
  );
}
