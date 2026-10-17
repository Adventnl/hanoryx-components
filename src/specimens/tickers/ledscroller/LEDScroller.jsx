import c from "../tickers.module.css";
import { Belt } from "../shared";

export function LEDScroller() {
  return (
    <div className={c.fig} role="img" aria-label="A dot-matrix sign scrolling: signal on, all stations">
      <div className={c.led}>
        <div className={c.ledDots}>
          <Belt dur={14} className={c.ledBelt}><span>SIGNAL ON  ·  ALL STATIONS  ·  </span></Belt>
        </div>
      </div>
    </div>
  );
}
