import { useDrag } from "../../../stage/hooks";
import c from "../markup.module.css";

export function EraserReveal() {
  const [v, bind] = useDrag({ mode: 'x', init: 0 });
  return (
    <div className={c.fig}>
      <div {...bind} className={c.erase} aria-label="Drag to rub out the cover" style={{ ...bind.style, '--v': v }}>
        <p className={c.para}>Under the grey there is a sentence nobody was meant to read.</p>
        <span className={c.cover} aria-hidden="true" />
      </div>
    </div>
  );
}
