import { useScan } from '../../stage/chartKit';
import c from './graphs.module.css';

/* 14 */ const COMMITS = [[0, 0, 'init grid'], [1, 0, 'add nodes'], [2, 1, 'try layout'], [3, 0, 'fix edges'], [3, 1, 'tune spacing'], [4, 0, 'merge layout'], [5, 0, 'polish'], [6, 0, 'release']];

const COMMIT_E = [[0, 1], [1, 3], [1, 2], [2, 4], [3, 5], [4, 5], [5, 6], [6, 7]];

export function BranchGraph() {
  const [i, bind] = useScan(8, { label: (k) => COMMITS[k][2] });
  const X = (k) => 8 + COMMITS[k][0] * 14;
  const Y = (k) => 14 + COMMITS[k][1] * 16;
  return (
    <div className={c.fig}>
      <div className={c.scanBox} {...bind} aria-label="Branch graph, move along it to read the commits">
        <svg className={c.svg} viewBox="0 0 100 40" aria-hidden="true">
          {COMMIT_E.map(([a, b], k) => <path key={k} className={c.edge} data-lane={COMMITS[b][1]} d={`M${X(a)} ${Y(a)}C${X(a) + 7} ${Y(a)} ${X(b) - 7} ${Y(b)} ${X(b)} ${Y(b)}`} />)}
          {COMMITS.map((m, k) => <circle key={k} className={c.nd} data-hot={k === i} cx={X(k)} cy={Y(k)} r="2.6" />)}
        </svg>
      </div>
      <p className={c.sub}>{i < 0 ? 'Move along the graph' : <>commit <b>{(i * 2654435761 >>> 0).toString(16).slice(0, 7)}</b> · {COMMITS[i][2]}</>}</p>
    </div>
  );
}
