import { useDrag } from "../../../stage/hooks";
import c from "../sheets.module.css";
import { Stage } from "../shared";

/* 40 */ export function SidePeek() {
  const [v, bind] = useDrag({ init: 0.1 });
  return <Stage label="Side peek"><div className={c.sidePeek} style={{ '--v': v }}><aside><b>Panel</b></aside><i {...bind} aria-label="Pull the panel open" aria-valuetext={`${Math.round(v * 100)} percent`} style={bind.style} /></div></Stage>;
}
