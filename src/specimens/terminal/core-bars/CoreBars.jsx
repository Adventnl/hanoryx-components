import { rng, useTick } from "../../../stage/hooks";
import c from "../terminal.module.css";

/* 22 */ export function CoreBars() {
  const n = useTick(700);
  return (
    <div className={c.win} role="img" aria-label="CPU usage per core">
      {Array.from({ length: 6 }, (_, k) => { const v = Math.round(rng(n * 13 + k * 5 + 1)() * 90 + 5); return (
        <div key={k} className={c.ln}><span className={c.dim}>{k}</span><span className={c.meter}><i style={{ width: `${v}%`, background: v > 75 ? '#ff6b6b' : '#4ade80' }} /></span><span>{v}%</span></div>
      ); })}
    </div>
  );
}
