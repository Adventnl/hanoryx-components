import { useDrag } from "../../../stage/hooks";
import c from "../faders.module.css";

/* 13 */ export function SegmentBar() {
  const [v, bind] = useDrag({ init: 0.5, steps: 9 });
  return (
    <div className={c.segs} {...bind} aria-label="Segment bar" style={{ ...bind.style }}>
      {Array.from({ length: 10 }, (_, i) => <i key={i} data-on={i <= Math.round(v * 9)} />)}
    </div>
  );
}
