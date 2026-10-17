import { useDrag } from "../../../stage/hooks";
import c from "../faders.module.css";

/* 37 */ export function RopeTension() {
  const [v, bind] = useDrag({ init: 0.4 });
  const sag = (1 - v) * 38;
  return (
    <div className={c.rope} {...bind} aria-label="Rope tension" style={{ ...bind.style }}>
      <svg viewBox="0 0 200 60" aria-hidden="true"><path d={`M6 10Q100 ${10 + sag * 2} 194 10`} /><circle cx="100" cy={10 + sag} r="4" /><circle cx="6" cy="10" r="4" /><circle cx="194" cy="10" r="4" /></svg>
      <span>{Math.round(v * 100)} N</span>
    </div>
  );
}
