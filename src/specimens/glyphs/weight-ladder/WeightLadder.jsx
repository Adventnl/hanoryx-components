import { useScan } from "../../../stage/chartKit";
import c from "../glyphs.module.css";

const WEIGHTS = [300, 400, 500, 600];

export function WeightLadder() {
  const [i, bind] = useScan(WEIGHTS.length, { axis: 'y', label: (k) => `weight ${WEIGHTS[k]}` });
  return (
    <div className={c.fig}>
      <div {...bind} className={c.ladder} aria-label="Four weights of one word; move along it to pick one">
        {WEIGHTS.map((w, k) => <p key={w} style={{ fontWeight: w }} data-on={i === k} data-f={i === -1 || i === k}><b>{w}</b>Weight</p>)}
      </div>
    </div>
  );
}
