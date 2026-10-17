import { useHot } from "../../../stage/chartKit";
import c from "../kinetic.module.css";

/* 5 */ export function RollHover() {
  const [hot, h] = useHot();
  return (
    <div className={c.fig}>
      <button type="button" className={c.roll} data-hot={hot} aria-label="Roll. Hover to roll the letters over" {...h}>
        {[...'ROLL OVER'].map((ch, i) => <b key={i} style={{ '--i': i }} aria-hidden="true"><i>{ch === ' ' ? ' ' : ch}</i><i>{ch === ' ' ? ' ' : ch}</i></b>)}
      </button>
    </div>
  );
}
