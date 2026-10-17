import { useTick, pad2 } from "../../../stage/hooks";
import c from "../figures.module.css";
import { hms } from "../shared";

/* 23 */ export function HexClock() {
  const n = useTick(1000);
  const [h, m, s] = hms(14 * 3600 + 35 * 60 + 8 + n);
  const hex = `#${[Math.round((h * 255) / 23), Math.round((m * 255) / 59), Math.round((s * 255) / 59)].map((v) => v.toString(16).padStart(2, '0')).join('').toUpperCase()}`;
  return (
    <div className={c.fig} role="img" aria-label={`A colour made from the time: ${hex}`}>
      <div className={c.hexSwatch} style={{ background: hex }}><b>{hex}</b></div>
      <p className={c.sub}>{pad2(h)}:{pad2(m)}:{pad2(s)}</p>
    </div>
  );
}
