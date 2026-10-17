import { useDrag } from "../../../stage/hooks";
import c from "../sheets.module.css";
import { Stage } from "../shared";

/* 11 */ export function SplitPane() {
  const [v, bind] = useDrag({ init: 0.4 });
  return (
    <Stage label="Split pane">
      <div className={c.split} style={{ '--v': v }}><section><b>List</b></section><i {...bind} aria-label="Resize panes" aria-valuetext={`${Math.round(v * 100)} percent`} style={bind.style} /><section><b>Detail</b></section></div>
    </Stage>
  );
}
