import c from './editorial.module.css';

/* ---------- the still side ---------- */

/** deterministic line lengths, 62–100 % of the column */
const lines = (n, seed) => Array.from({ length: n }, (_, i) => 62 + ((i * 37 + seed * 11) % 39));

const COLS = [lines(13, 1), lines(13, 4)];

export function Visual() {
  return (
    <div className={c.page} aria-hidden="true">
      <p className={c.kicker}><span>Essay</span><span>No. 04</span></p>
      <h3 className={c.headline}>
        <span><b>The long</b></span>
        <span><b>way round</b></span>
      </h3>
      <p className={c.stand}>A short note on belts, platforms and the people who wind them.</p>
      <p className={c.byline}><b>By A. Writer</b><span>8 min read</span></p>
      <div className={c.cols}>
        {COLS.map((col, n) => (
          <div key={n} className={c.col}>
            {col.map((w, i) => <i key={i} style={{ '--w': w, '--k': n * 13 + i }} />)}
          </div>
        ))}
        <p className={c.pullV}>“Nobody asked it to.”</p>
      </div>
      <figure className={c.figV}>
        <span className={c.imgV} />
        <figcaption>Fig. 1 — The belt, seen from the gate.</figcaption>
      </figure>
      <p className={c.footV}><sup>1</sup> Nor did anyone find the switch.</p>
      <span className={c.folio}>14</span>
    </div>
  );
}
