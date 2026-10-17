import { useDrag } from "../../../stage/hooks";
import c from "../faders.module.css";

/* 10 */ export function CentreDetent() {
  const [v, bind] = useDrag({ init: 0.5, steps: 10 });
  return (
    <div className={c.detent}>
      <div {...bind} aria-label="Slider with a centre detent" style={{ ...bind.style, '--v': v }}><i /></div>
      <ol>{Array.from({ length: 11 }, (_, i) => <li key={i} data-mid={i === 5} data-on={i === Math.round(v * 10)} />)}</ol>
    </div>
  );
}
