import { useDrag } from "../../../stage/hooks";
import c from "../switchboard.module.css";

/* 24 */ export function RopePull() {
  const [v, bind] = useDrag({ mode: 'y', init: 1 });
  const pull = 1 - v;
  return (
    <div className={c.rope} {...bind} aria-label="Rope pull" style={{ ...bind.style, '--p': pull }} data-on={pull > 0.5}>
      <i /><b /><span className={c.bulb} data-on={pull > 0.5} />
    </div>
  );
}
