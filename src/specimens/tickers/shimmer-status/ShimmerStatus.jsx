import c from "../tickers.module.css";

const SYNC = [...'SYNCING FEED'];

export function ShimmerStatus() {
  return (
    <div className={c.fig} role="img" aria-label="Syncing feed, forty-two percent">
      <p className={c.shim}>{SYNC.map((ch, i) => <span key={i} style={{ '--i': i }}>{ch}</span>)}</p>
      <span className={c.shimBar}><i /></span>
      <span className={c.shimMeta}><em>42%</em><b>3 / 7 BLOCKS</b></span>
    </div>
  );
}
