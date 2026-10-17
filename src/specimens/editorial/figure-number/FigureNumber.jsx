import { useCycle } from "../../../stage/hooks";
import c from "../editorial.module.css";

const FIGS = [1, 2, 3, 4];

export function FigureNumber() {
  const k = useCycle(FIGS.length, 1800);
  return (
    <div className={c.fig} role="img" aria-label={`Figure ${FIGS[k]}`}>
      <div className={c.figNo}><span>FIG.</span><span className={c.roll}><span style={{ '--d': k }}>{FIGS.map((n) => <i key={n}>{n}</i>)}</span></span></div>
    </div>
  );
}
