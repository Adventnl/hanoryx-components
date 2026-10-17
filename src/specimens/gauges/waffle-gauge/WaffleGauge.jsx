import { useDrag } from "../../../stage/hooks";
import c from "../gauges.module.css";

/* 12 */ const CELLS = Array.from({ length: 100 }, (_, k) => (9 - Math.floor(k / 10)) * 10 + (k % 10));

export function WaffleGauge() {
  const [v, bind] = useDrag({ init: 0.63 });
  const lit = Math.round(v * 100);
  return (
    <div className={c.waffle}>
      <div className={c.grid} {...bind} aria-label="Waffle gauge">
        {CELLS.map((n, k) => <i key={k} data-on={n < lit} data-hi={n >= 75} />)}
      </div>
      <output>{lit}<small>%</small></output>
    </div>
  );
}
