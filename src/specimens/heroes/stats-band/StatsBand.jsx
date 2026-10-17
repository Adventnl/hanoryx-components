import { useTick } from "../../../stage/hooks";
import c from "../heroes.module.css";
import { Sc } from "../shared";

/* 10 */ export function StatsBand() {
  const n = useTick(100);
  const p = Math.min(1, (n % 28) / 18);
  return <Sc label="Stats band" className={c.stats} role="img">{[['Teams', 480], ['Uptime', 99.9], ['Countries', 36]].map(([t, v]) => <div key={t}><b>{v < 100 && v % 1 ? (v * p).toFixed(1) : Math.round(v * p)}{t === 'Uptime' ? '%' : '+'}</b><small>{t}</small></div>)}</Sc>;
}
