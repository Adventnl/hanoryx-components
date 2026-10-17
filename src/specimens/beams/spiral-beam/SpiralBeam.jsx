import c from "../beams.module.css";
import { Sv } from "../shared";

/* 28 */ export function SpiralBeam() {
  const d = Array.from({ length: 140 }, (_, i) => { const t = i / 8; const r = 1.4 * t; return `${i ? 'L' : 'M'}${(55 + Math.cos(t) * r * 1.7).toFixed(1)} ${(32 + Math.sin(t) * r * 1.2).toFixed(1)}`; }).join('');
  return <Sv label="A spiral drawing itself"><path d={d} className={c.base} /><path d={d} pathLength="100" className={c.lit} style={{ '--len': 26, animationDuration: '3.6s', strokeWidth: 1.5 }} /></Sv>;
}
