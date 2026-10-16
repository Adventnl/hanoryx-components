import c from './tickers.module.css';
import { Belt } from './shared';

export function ScrollTape() {
  return (
    <div className={c.fig} role="img" aria-label="A tape that slides as the page scrolls">
      <Belt copies={8} scroll className={c.scrollBelt}><span className={c.scrollText}>THE PAGE MOVES  ·  THE TAPE FOLLOWS  ·  </span></Belt>
      <p className={c.note}>linked to the page scroll</p>
    </div>
  );
}
