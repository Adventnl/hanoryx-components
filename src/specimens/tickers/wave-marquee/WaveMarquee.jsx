import c from "../tickers.module.css";
import { Belt } from "../shared";

const WAVE = [...'RIDING THE WAVE  ·  '];

export function WaveMarquee() {
  return (
    <div className={c.fig} role="img" aria-label="Riding the wave">
      <Belt dur={15} className={c.waveBelt}>
        {WAVE.map((ch, i) => <span key={i} className={c.wch} style={{ '--i': i }}>{ch}</span>)}
      </Belt>
    </div>
  );
}
