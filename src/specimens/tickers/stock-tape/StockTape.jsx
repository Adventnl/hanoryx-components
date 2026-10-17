import c from "../tickers.module.css";
import { Belt } from "../shared";

const QUOTES = [['HNRX', 12.4, 0.8], ['ORBT', 88.15, -1.2], ['VLTA', 4.02, 2.4], ['KRNL', 231.7, -0.3], ['MESH', 57.9, 1.1], ['LUMN', 19.35, -2.7], ['DYNA', 143, 0.4]];

export function StockTape() {
  return (
    <div className={c.fig} role="img" aria-label="A scrolling tape of made-up prices">
      <Belt dur={24} className={c.tapeBar}>
        {QUOTES.map(([sym, px, ch]) => (
          <span key={sym} className={c.quote} data-dn={ch < 0}><b>{sym}</b>{px.toFixed(2)}<em>{Math.abs(ch).toFixed(1)}%</em></span>
        ))}
      </Belt>
    </div>
  );
}
