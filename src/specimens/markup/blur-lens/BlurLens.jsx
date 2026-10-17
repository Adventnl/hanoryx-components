import { usePoint } from "../../../stage/chartKit";
import c from "../markup.module.css";

const LENS = 'The names on this page were meant to stay blurred, and a small circle of light is the only thing that can read them.';

export function BlurLens() {
  const [p, bind] = usePoint();
  return (
    <div className={c.fig}>
      <div {...bind} className={c.lens} aria-label="A blurred paragraph; move over it to read through a circle" style={{ ...bind.style, '--lx': `${p ? p.x : 50}%`, '--ly': `${p ? p.y : 50}%`, '--lo': p ? 1 : 0 }}>
        <p className={c.lensBlur}>{LENS}</p>
        <p className={c.lensSharp} aria-hidden="true">{LENS}</p>
      </div>
    </div>
  );
}
