import { useState } from 'react';
import { polar } from '../../stage/chartKit';
import c from './graphs.module.css';
import { Legend, layoutTree } from './shared';

/* 8 */ const RADIAL = layoutTree({ n: 'root', kids: [{ n: 'a', kids: [{ n: 'a1' }, { n: 'a2' }, { n: 'a3' }] }, { n: 'b', kids: [{ n: 'b1', kids: [{ n: 'b1x' }, { n: 'b1y' }] }, { n: 'b2' }] }, { n: 'c', kids: [{ n: 'c1' }, { n: 'c2' }, { n: 'c3' }, { n: 'c4' }] }] });

const radialPos = (d) => (d.depth === 0 ? [50, 50] : polar(50, 50, d.depth * 14, ((d.x + 0.5) / RADIAL.leaves) * 360));

const branchOf = (d) => { let v = d; while (v.parent && v.parent.parent) v = v.parent; return v.parent ? RADIAL.nodes.find((m) => m.parent && !m.parent.parent && m.n === v.n) : null; };

export function RadialTree() {
  const [hot, setHot] = useState(-1);
  const tops = RADIAL.nodes.filter((d) => d.depth === 1);
  return (
    <div className={c.col} data-hot={hot}>
      <svg className={c.svg} viewBox="0 0 100 100" aria-hidden="true">
        {[14, 28, 42].map((r) => <circle key={r} className={c.ring} cx="50" cy="50" r={r} />)}
        {RADIAL.nodes.filter((d) => d.parent).map((d, i) => { const [x1, y1] = radialPos(d.parent); const [x2, y2] = radialPos(d); return <line key={i} className={c.edge} data-hot={hot >= 0 && branchOf(d) === tops[hot]} x1={x1} y1={y1} x2={x2} y2={y2} />; })}
        {RADIAL.nodes.map((d, i) => { const [x, y] = radialPos(d); return <circle key={i} className={c.nd} data-hot={hot >= 0 && (d === tops[hot] || branchOf(d) === tops[hot])} cx={x} cy={y} r={d.depth === 0 ? 3.4 : 2} />; })}
      </svg>
      <Legend items={tops.map((d) => `Branch ${d.n.n.toUpperCase()}`)} hot={hot} setHot={setHot} />
    </div>
  );
}
