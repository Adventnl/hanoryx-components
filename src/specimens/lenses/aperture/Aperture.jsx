import { useDrag } from "../../../stage/hooks";
import c from "../lenses.module.css";

/* 26 */ export function Aperture() {
  const [v, bind] = useDrag({ init: 0.55 });
  return (
    <div className={c.irisBox}>
      <div {...bind} className={c.iris} aria-label="Aperture" aria-valuetext={`f/${(1.4 + (1 - v) * 14).toFixed(1)}`} style={{ ...bind.style, '--v': v }}>{Array.from({ length: 8 }, (_, k) => <i key={k} style={{ '--k': k }} />)}<b /></div>
      <output>f/{(1.4 + (1 - v) * 14).toFixed(1)}</output>
    </div>
  );
}
