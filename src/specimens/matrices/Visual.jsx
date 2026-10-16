import { f1 } from '../../stage/chartKit';
import c from './matrices.module.css';

/* ---- the map on the left ---- */
const N = 42; /* specimens on this page: the map draws one cell for each */

/* specimens on this page: the map draws one cell for each */
const COLS = 8;

const ROWS = 6;

const END = N / COLS; /* how far along the path the last specimen sits */

/* how far along the path the last specimen sits */
const CELLS = Array.from({ length: COLS * ROWS }, (_, k) => {
  const r = Math.floor(k / COLS);
  const col = k % COLS;
  return { k, r, col, real: r * COLS + (r % 2 ? COLS - 1 - col : col) < N };
});

const tri = (s) => 1 - Math.abs((s % 2) - 1);

const TRACE = [...Array.from({ length: Math.ceil(END) }, (_, s) => s), END]
  .map((s, i) => `${i ? 'L' : 'M'}${f1(0.5 + 7 * tri(s))} ${f1((s + 0.5) * 1.5)}`).join('');

export function Visual() {
  return (
    <div className={c.mini} aria-hidden="true">
      <p className={c.where}><b className={c.nTile} /><i>/ {N}</i></p>
      <div className={c.board}>
        <div className={c.cells}>
          {CELLS.map((d) => <i key={d.k} data-real={d.real} style={{ '--cx': d.col, '--cy': d.r }} />)}
        </div>
        <svg viewBox="0 0 8 9"><path className={c.trace} d={TRACE} pathLength="1" /></svg>
        <b className={c.you} />
      </div>
      <p className={c.coords}>row <span className={c.nRow} /> / {ROWS} · col <span className={c.nCol} /> / {COLS}</p>
    </div>
  );
}
