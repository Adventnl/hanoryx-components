import { useDrag } from "../../../stage/hooks";
import c from "../faders.module.css";

/* 17 */ export function SlideRule() {
  const [v, bind] = useDrag({ init: 0.3 });
  return (
    <div className={c.rule} {...bind} aria-label="Slide rule" style={{ ...bind.style, '--v': v }}>
      <ol>{[1, 2, 3, 4, 5, 6, 8, 10].map((n) => <li key={n} style={{ left: `${Math.log10(n) * 100}%` }}>{n}</li>)}</ol>
      <ol className={c.slider}>{[1, 2, 3, 4, 5, 6, 8, 10].map((n) => <li key={n} style={{ left: `${Math.log10(n) * 100}%` }}>{n}</li>)}</ol>
    </div>
  );
}
