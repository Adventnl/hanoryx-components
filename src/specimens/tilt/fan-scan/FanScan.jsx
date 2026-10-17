import { useScan } from "../../../stage/chartKit";
import c from "../tilt.module.css";

export function FanScan() {
  const [i, bind] = useScan(5, { axis: 'x', label: (k) => `Card ${k + 1}` });
  return (
    <div className={c.fig}>
      <div {...bind} className={c.scan} aria-label="Five cards that lean with the pointer">
        {[0, 1, 2, 3, 4].map((k) => <i key={k} style={{ transform: `rotateY(${(i < 0 ? 0 : (k - i) * -16).toFixed(0)}deg) translateZ(${i === k ? 26 : 0}px)` }}>{k + 1}</i>)}
      </div>
    </div>
  );
}
