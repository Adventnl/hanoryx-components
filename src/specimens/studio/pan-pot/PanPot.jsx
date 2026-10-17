import { useDrag } from "../../../stage/hooks";
import c from "../studio.module.css";

/* 7 */ export function PanPot() {
  const [v, bind] = useDrag({ mode: 'r', init: 0.5, range: 270 });
  const p = Math.round((v - 0.5) * 100);
  return (
    <div className={c.pan}>
      <div {...bind} aria-label="Pan" aria-valuetext={p === 0 ? 'centre' : p < 0 ? `${-p} left` : `${p} right`} style={{ ...bind.style, '--v': v }}><i /></div>
      <output>{p === 0 ? 'C' : p < 0 ? `L${-p}` : `R${p}`}</output>
    </div>
  );
}
