import { useHot } from "../../../stage/chartKit";
import c from "../kinetic.module.css";

/* 2 */ export function LetterSplit() {
  const [hot, h] = useHot();
  return (
    <div className={c.fig}>
      <button type="button" className={c.splitWord} data-hot={hot} aria-label="Split. Hover to pull the letters apart" {...h}>
        {[...'SPLIT'].map((ch, i) => <b key={i} style={{ '--i': i }} aria-hidden="true"><i>{ch}</i><i>{ch}</i></b>)}
      </button>
    </div>
  );
}
