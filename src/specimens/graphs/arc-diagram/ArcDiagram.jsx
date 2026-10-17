import { useScan } from "../../../stage/chartKit";
import c from "../graphs.module.css";

/* 33 */ const ARCS = [[0, 3], [1, 5], [2, 4], [0, 8], [4, 9], [6, 9], [3, 7], [5, 8]];

export function ArcDiagram() {
  const [i, bind] = useScan(10, { label: (k) => `Node ${k + 1}` });
  const X = (k) => 6 + k * 9.8;
  return (
    <div className={c.fig}>
      <div className={c.scanBox} {...bind} aria-label="Arc diagram, move along the nodes to light their arcs">
        <svg className={c.svg} viewBox="0 0 100 40" aria-hidden="true">
          {ARCS.map(([a, b], k) => <path key={k} className={c.edge} data-hot={a === i || b === i} d={`M${X(a)} 30A${(X(b) - X(a)) / 2} ${(X(b) - X(a)) / 2.4} 0 0 1 ${X(b)} 30`} />)}
          {Array.from({ length: 10 }, (_, k) => <circle key={k} className={c.nd} data-hot={k === i} cx={X(k)} cy="30" r="2.2" />)}
        </svg>
      </div>
    </div>
  );
}
