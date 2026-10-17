import { useDrag } from "../../../stage/hooks";
import c from "../waypoints.module.css";

/* 3 */ export function PageThumbnail() {
  const [v, bind] = useDrag({ mode: 'y', init: 0.7 });
  return (
    <div className={c.mini} {...bind} aria-label="Page thumbnail, drag the window" aria-valuetext={`${Math.round((1 - v) * 100)} percent down`} style={{ ...bind.style, '--v': 1 - v }}>
      {Array.from({ length: 14 }, (_, k) => <i key={k} style={{ width: `${40 + ((k * 37) % 55)}%` }} />)}
      <b aria-hidden="true" />
    </div>
  );
}
