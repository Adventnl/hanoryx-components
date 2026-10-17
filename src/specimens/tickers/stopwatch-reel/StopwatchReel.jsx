import c from "../tickers.module.css";

const RL10 = Array.from({ length: 11 }, (_, i) => i % 10);

const RL6 = Array.from({ length: 7 }, (_, i) => i % 6);

export function StopwatchReel() {
  return (
    <div className={c.fig} role="img" aria-label="A stopwatch built from four turning reels">
      <div className={c.watch}>
        <span className={`${c.rl} ${c.mT}`}><b>{RL6.map((d, i) => <i key={i}>{d}</i>)}</b></span>
        <span className={`${c.rl} ${c.mO}`}><b>{RL10.map((d, i) => <i key={i}>{d}</i>)}</b></span>
        <u>:</u>
        <span className={`${c.rl} ${c.sT}`}><b>{RL6.map((d, i) => <i key={i}>{d}</i>)}</b></span>
        <span className={`${c.rl} ${c.sO}`}><b>{RL10.map((d, i) => <i key={i}>{d}</i>)}</b></span>
      </div>
    </div>
  );
}
