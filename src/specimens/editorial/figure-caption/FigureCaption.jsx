import { useHot } from "../../../stage/chartKit";
import c from "../editorial.module.css";

/* ---------- 02 figures and captions ---------- */

export function FigureCaption() {
  const [hot, bind] = useHot();
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} data-hot={hot} aria-pressed={hot} aria-label="Figure with a caption that slides up" {...bind}>
      <span className={`${c.frame} ${c.art1}`}>
        <span className={c.capSlide}>Fig. 1 — The belt, seen from the gate.</span>
      </span>
    </button>
  );
}
