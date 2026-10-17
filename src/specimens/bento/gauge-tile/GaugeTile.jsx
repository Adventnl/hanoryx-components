import { useDrag } from "../../../stage/hooks";
import c from "../bento.module.css";
import { Tile } from "../shared";

export function GaugeTile() {
  const [v, bind] = useDrag({ mode: 'x', init: 0.62 });
  return (
    <div className={c.fig}>
      <Tile k="Load">
        <svg className={c.gauge} viewBox="0 0 60 36" aria-hidden="true">
          <path className={c.gTrack} d="M6 32A24 24 0 0 1 54 32" />
          <path className={c.gVal} pathLength="1" d="M6 32A24 24 0 0 1 54 32" style={{ strokeDasharray: `${v} 1` }} />
        </svg>
        <b className={`${c.v} ${c.center}`}>{Math.round(v * 100)}%</b>
      </Tile>
      <div {...bind} className={c.track} aria-label="Load" aria-valuetext={`${Math.round(v * 100)} percent`} style={{ ...bind.style, '--v': v }}><i /></div>
    </div>
  );
}
