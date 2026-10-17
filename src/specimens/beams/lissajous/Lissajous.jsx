import c from "../beams.module.css";
import { Sv } from "../shared";

/* 23 */ export function Lissajous() {
  const d = Array.from({ length: 121 }, (_, i) => { const t = (i / 120) * Math.PI * 2; return `${i ? 'L' : 'M'}${(55 + Math.sin(3 * t + 1) * 44).toFixed(1)} ${(32 + Math.sin(2 * t) * 24).toFixed(1)}`; }).join('');
  return <Sv label="A Lissajous figure being drawn"><path d={d} className={c.base} /><path d={d} pathLength="100" className={c.lit} style={{ '--len': 30, animationDuration: '4s', strokeWidth: 1.6 }} /></Sv>;
}
