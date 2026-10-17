import { useDrag } from "../../../stage/hooks";
import c from "../cockpit.module.css";

/* 30 */ export function TrimWheel() {
  const [v, bind] = useDrag({ mode: 'y', init: 0.5, steps: 20 });
  return (
    <div className={c.trim}>
      <div {...bind} aria-label="Trim wheel" aria-valuetext={v > 0.52 ? 'nose up' : v < 0.48 ? 'nose down' : 'neutral'} style={{ ...bind.style, '--v': v }}>{Array.from({ length: 14 }, (_, k) => <i key={k} style={{ '--k': k }} />)}</div>
      <output>{v > 0.52 ? 'NOSE UP' : v < 0.48 ? 'NOSE DOWN' : 'NEUTRAL'}</output>
    </div>
  );
}
