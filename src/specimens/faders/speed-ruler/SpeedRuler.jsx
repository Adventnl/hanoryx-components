import { useDrag } from "../../../stage/hooks";
import c from "../faders.module.css";

/* 30 */ export function SpeedRuler() {
  const [v, bind] = useDrag({ init: 0.4 });
  return (
    <div className={c.speed} {...bind} aria-label="Speed" style={{ ...bind.style, '--v': v }}>
      <ol>{Array.from({ length: 21 }, (_, i) => <li key={i} data-big={i % 5 === 0} />)}</ol><i /><span>{Math.round(v * 200)}<small> KM/H</small></span>
    </div>
  );
}
