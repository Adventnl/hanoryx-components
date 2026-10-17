import { useHot } from "../../../stage/chartKit";
import c from "../editorial.module.css";

const SPARK = [3, 5, 4, 7, 6, 9, 8, 11];

export function Sparkword() {
  const [hot, bind] = useHot();
  const d = SPARK.map((v, i) => `${i ? 'L' : 'M'}${i * 5} ${14 - v}`).join('');
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} data-hot={hot} aria-pressed={hot} aria-label="A sentence with a small trend line inside it" {...bind}>
      <span className={c.para}>Visitors rose <svg className={c.spark} viewBox="0 0 36 14" aria-hidden="true"><path d={d} /><circle cx="35" cy={14 - SPARK[7]} r="1.6" /></svg><span className={c.sval} data-on={hot}>+8</span> over the week.</span>
    </button>
  );
}
