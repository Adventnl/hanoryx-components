import { useDrag } from "../../../stage/hooks";
import c from "../passes.module.css";

/* 38 */
export function LaminateSlider() {
  const [v, bind] = useDrag({ mode: 'x', init: 0.5 });
  return (
    <div className={c.fig}>
      <div className={c.lm} {...bind} aria-label="Laminate: drag sideways to peel the film back" style={{ ...bind.style, '--v': v.toFixed(3) }}>
        <span className={c.lmCard}>
          <span className={c.lmPhoto} />
          <span className={c.lmInfo}><span className={c.kd}>Resident</span><b>Mara Quill</b><span className={c.kd}>ID 0042 7731</span></span>
        </span>
        <span className={c.lmFilm} />
        <i className={c.lmEdge} />
      </div>
      <p className={c.k}>{v > 0.97 ? 'Fully laminated' : v < 0.03 ? 'Bare card' : `${Math.round(v * 100)}% laminated`}</p>
    </div>
  );
}
