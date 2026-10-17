import { useDrag } from "../../../stage/hooks";
import c from "../markup.module.css";

export function HighlighterDrag() {
  const [v, bind] = useDrag({ mode: 'x', init: 0.45 });
  return (
    <div className={c.fig}>
      <p {...bind} className={`${c.para} ${c.draggable}`} aria-label="Drag across the text to highlight as far as you like" style={{ ...bind.style, '--v': v }}>
        <span className={c.pen}>Drag across this line of text to highlight it, as far as you like.</span>
      </p>
    </div>
  );
}
