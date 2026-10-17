import { useDrag } from "../../../stage/hooks";
import c from "../studio.module.css";

/* 26 */ export function ReverbRings() {
  const [v, bind] = useDrag({ init: 0.5 });
  return <div className={c.verb} {...bind} aria-label="Reverb size" aria-valuetext={`${Math.round(v * 100)} percent`} style={{ ...bind.style, '--v': v }}>{[0, 1, 2, 3].map((k) => <i key={k} style={{ '--k': k }} />)}<b /></div>;
}
