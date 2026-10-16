import { polar } from '../../stage/chartKit';
import c from './graphs.module.css';

/* ---- the growing graph on the spine ---- */
const GROW = (() => {
  const nodes = [{ x: 50, y: 50, parent: -1 }];
  for (let i = 0; i < 6; i += 1) { const [x, y] = polar(50, 50, 17, i * 60 + 20); nodes.push({ x, y, parent: 0 }); }
  for (let i = 0; i < 6; i += 1) {
    for (let k = 0; k < 4; k += 1) { const [x, y] = polar(50, 50, 37 + (k % 2) * 4, i * 60 + 20 + (k - 1.5) * 13); nodes.push({ x, y, parent: 1 + i }); }
  }
  return nodes;
})();

export function Visual() {
  return (
    <div className={c.grow} aria-hidden="true">
      <svg viewBox="0 0 100 100">
        <g className={c.growTurn}>
          {GROW.map((n, i) => (n.parent < 0 ? null : (
            <line key={`e${i}`} className={c.gEdge} style={{ '--i': i }} pathLength="1" x1={GROW[n.parent].x} y1={GROW[n.parent].y} x2={n.x} y2={n.y} />
          )))}
          {GROW.map((n, i) => <circle key={i} className={c.gNode} data-tier={i === 0 ? 0 : i < 7 ? 1 : 2} style={{ '--i': i }} cx={n.x} cy={n.y} r={i === 0 ? 3.4 : i < 7 ? 2.4 : 1.7} />)}
        </g>
      </svg>
      <p className={c.counts}><span><b className={c.nNodes} />nodes</span><span><b className={c.nLinks} />links</span></p>
    </div>
  );
}
