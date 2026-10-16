import { useScan } from '../../stage/chartKit';
import c from './bento.module.css';
import { Tile } from './shared';

const STORE = [['Docs', 24, 'a'], ['Media', 38, 'b'], ['Apps', 18, 'c'], ['Free', 20, 'd']];

export function StorageTile() {
  const edges = STORE.reduce((a, s, i) => [...a, (a[i - 1] ?? 0) + s[1] / 100], []);
  const [i, bind] = useScan(4, { axis: 'x', edges, label: (k) => `${STORE[k][0]}: ${STORE[k][1]} percent` });
  return (
    <div className={c.fig}>
      <Tile k="Storage">
        <div {...bind} className={c.stack} aria-label="Storage by kind; move along the bar">
          {STORE.map(([n, p, k], j) => <i key={n} className={c[`s_${k}`]} data-on={i === j} style={{ flexGrow: p }} />)}
        </div>
        <b className={c.v}>{i < 0 ? '80 GB' : `${STORE[i][0]} · ${STORE[i][1]}%`}</b>
      </Tile>
    </div>
  );
}
