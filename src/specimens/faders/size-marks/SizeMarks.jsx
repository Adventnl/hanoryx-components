import { useDrag } from "../../../stage/hooks";
import c from "../faders.module.css";

/* 33 */ export function SizeMarks() {
  const [v, bind] = useDrag({ init: 0.5, steps: 3 });
  const n = Math.round(v * 3);
  return (
    <div className={c.sizes}>
      <div {...bind} aria-label="Size" style={{ ...bind.style, '--v': v }}><i /></div>
      <ol>{['S', 'M', 'L', 'XL'].map((t, i) => <li key={t} data-on={i === n}>{t}</li>)}</ol>
    </div>
  );
}
