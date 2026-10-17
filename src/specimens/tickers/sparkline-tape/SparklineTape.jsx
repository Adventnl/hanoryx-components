import { series, pts, poly } from "../../../stage/chartKit";
import c from "../tickers.module.css";
import { Belt } from "../shared";

const SPARKS = ['HNRX', 'ORBT', 'VLTA', 'KRNL', 'MESH', 'LUMN'].map((sym, i) => {
  const v = series(9, 40 + i * 7);
  const delta = (v[8] - v[0]) * 10;
  return { sym, d: poly(pts(v, 44, 16, 2)), dn: delta < 0, pct: `${Math.abs(delta).toFixed(1)}%` };
});

export function SparklineTape() {
  return (
    <div className={c.fig} role="img" aria-label="A tape of made-up prices, each with a small trend line">
      <Belt dur={26} className={c.tapeBar}>
        {SPARKS.map((s) => (
          <span key={s.sym} className={c.spk} data-dn={s.dn}>
            <b>{s.sym}</b>
            <svg viewBox="0 0 44 16" aria-hidden="true"><path d={s.d} /></svg>
            <em>{s.pct}</em>
          </span>
        ))}
      </Belt>
    </div>
  );
}
