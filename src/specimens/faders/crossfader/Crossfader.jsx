import { useDrag } from "../../../stage/hooks";
import c from "../faders.module.css";

/* 5 */ export function Crossfader() {
  const [v, bind] = useDrag({ init: 0.5 });
  return (
    <div className={c.cross}>
      <div className={c.crossTrack} {...bind} aria-label="Crossfader" style={{ ...bind.style, '--v': v }}><i /></div>
      <p><b>A {Math.round((1 - v) * 100)}</b><b>B {Math.round(v * 100)}</b></p>
    </div>
  );
}
