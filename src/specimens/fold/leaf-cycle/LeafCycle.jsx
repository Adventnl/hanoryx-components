import c from "../fold.module.css";
import { PN } from "../shared";

/* ---------- 04 motion that folds on its own ---------- */

export function LeafCycle() {
  return (
    <div className={c.fig} role="img" aria-label="A leaf turning over and over through four faces">
      <div className={c.stage}>
        <div className={c.cycle}>{PN.map((p, i) => <i key={p} style={{ '--i': i }}><b>{p}</b></i>)}</div>
      </div>
    </div>
  );
}
