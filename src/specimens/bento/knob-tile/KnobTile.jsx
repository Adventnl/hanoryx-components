import { useDrag } from "../../../stage/hooks";
import c from "../bento.module.css";
import { Tile } from "../shared";

export function KnobTile() {
  const [v, bind] = useDrag({ mode: 'r', init: 0.4 });
  return (
    <div className={c.fig}>
      <Tile k="Level">
        <div {...bind} className={c.knob} aria-label="Level knob" aria-valuetext={`${Math.round(v * 100)} percent`} style={{ ...bind.style }}>
          <i style={{ transform: `rotate(${-135 + v * 270}deg)` }} />
        </div>
        <b className={`${c.v} ${c.center}`}>{Math.round(v * 100)}</b>
      </Tile>
    </div>
  );
}
