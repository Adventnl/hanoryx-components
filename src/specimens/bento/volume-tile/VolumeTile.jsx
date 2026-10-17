import { useDrag } from "../../../stage/hooks";
import c from "../bento.module.css";
import { Tile } from "../shared";

export function VolumeTile() {
  const [v, bind] = useDrag({ mode: 'y', init: 0.55, steps: 10 });
  return (
    <div className={c.fig}>
      <Tile k="Volume">
        <div {...bind} className={c.vol} aria-label="Volume" aria-valuetext={`${Math.round(v * 10)} of 10`} style={{ ...bind.style }}>
          {Array.from({ length: 10 }, (_, i) => <i key={i} data-on={i < Math.round(v * 10)} style={{ '--i': i }} />)}
        </div>
        <b className={`${c.v} ${c.center}`}>{Math.round(v * 10)}</b>
      </Tile>
    </div>
  );
}
