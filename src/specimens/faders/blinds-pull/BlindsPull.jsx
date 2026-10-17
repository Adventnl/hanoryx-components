import { useDrag } from "../../../stage/hooks";
import c from "../faders.module.css";

/* 27 */ export function BlindsPull() {
  const [v, bind] = useDrag({ mode: 'y', init: 0.4 });
  return (
    <div className={c.blinds} style={{ '--v': v }}>
      <div>{Array.from({ length: 9 }, (_, i) => <i key={i} />)}</div>
      <p {...bind} aria-label="Blinds cord" style={{ ...bind.style, '--v': v }}><b /></p>
    </div>
  );
}
