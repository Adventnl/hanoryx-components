import { usePoint } from "../../../stage/chartKit";
import c from "../glyphs.module.css";

/* ---------- 04 play ---------- */

const NORTH = [...'NORTH'];

export function LetterCompass() {
  const [p, bind] = usePoint();
  return (
    <div className={c.fig}>
      <div {...bind} className={c.compass} aria-label="Letters that turn to face the pointer">
        {NORTH.map((ch, i) => {
          const cx = 10 + i * 20;
          const ang = p ? (Math.atan2(p.y - 50, (p.x - cx) * 3) * 180) / Math.PI + 90 : 0;
          return <span key={i} style={{ transform: `rotate(${ang.toFixed(1)}deg)` }}>{ch}</span>;
        })}
      </div>
    </div>
  );
}
