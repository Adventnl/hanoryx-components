import c from './tickers.module.css';
import { Belt } from './shared';

export function NewsCrawl() {
  return (
    <div className={c.fig} role="img" aria-label="A news crawl: quiet launch confirmed for Tuesday, gates reopen at seven">
      <div className={c.news}>
        <span className={c.live}><i className="sc-led" /> LIVE</span>
        <Belt dur={22} className={c.newsBelt}><span>Quiet launch confirmed for Tuesday  ·  Gates reopen at seven  ·  Tea is served on platform two  ·  </span></Belt>
      </div>
    </div>
  );
}
