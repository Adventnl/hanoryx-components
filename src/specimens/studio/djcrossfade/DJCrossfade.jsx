import { useDrag } from "../../../stage/hooks";
import c from "../studio.module.css";

/* 10 */ export function DJCrossfade() {
  const [v, bind] = useDrag({ init: 0.5 });
  return (
    <div className={c.cross} {...bind} aria-label="Crossfader" aria-valuetext={v < 0.1 ? 'deck A' : v > 0.9 ? 'deck B' : `${Math.round((1 - v) * 100)} A, ${Math.round(v * 100)} B`} style={{ ...bind.style, '--v': v }}>
      <span style={{ opacity: 1 - v * 0.7 }}>A</span><i /><span style={{ opacity: 0.3 + v * 0.7 }}>B</span>
    </div>
  );
}
