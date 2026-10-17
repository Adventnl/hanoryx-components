import { useDrag } from "../../../stage/hooks";
import c from "../figures.module.css";

/* 24 */ export function NumberLine() {
  const [v, bind] = useDrag({ init: 0.62, steps: 20 });
  const x = Math.round(v * 20) - 10;
  return (
    <div className={c.fig}>
      <div className={c.nl} {...bind} aria-label="Number line, drag the point" style={{ ...bind.style, '--v': v }}>
        {Array.from({ length: 21 }, (_, i) => <i key={i} data-big={i % 5 === 0} style={{ '--i': i }}>{i % 5 === 0 ? i - 10 : ''}</i>)}
        <u />
      </div>
      <output className={c.fOut}>{x > 0 ? '+' : ''}{x}<small>|x| = {Math.abs(x)}</small></output>
    </div>
  );
}
