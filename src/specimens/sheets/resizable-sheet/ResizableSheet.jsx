import { useDrag } from "../../../stage/hooks";
import c from "../sheets.module.css";
import { Stage } from "../shared";

/* 33 */ export function ResizableSheet() {
  const [v, bind] = useDrag({ init: 0.5 });
  return <Stage label="Resizable sheet"><div className={c.resize} style={{ '--v': v }}><b>Resize</b><i {...bind} aria-label="Resize handle" aria-valuetext={`${Math.round(60 + v * 40)} percent`} style={bind.style} /></div></Stage>;
}
