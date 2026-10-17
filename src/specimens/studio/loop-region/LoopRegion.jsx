import { useDrag } from "../../../stage/hooks";
import c from "../studio.module.css";
import { WAVE } from "../shared";

/* 13 */ export function LoopRegion() {
  const [a, bindA] = useDrag({ init: 0.25 });
  const [b, bindB] = useDrag({ init: 0.7 });
  const lo = Math.min(a, b);
  const hi = Math.max(a, b);
  return (
    <div className={c.loop} style={{ '--a': lo, '--b': hi }}>
      <div className={c.loopWave}>{WAVE.map((h, k) => <u key={k} style={{ height: `${h * 100}%` }} />)}<i /></div>
      <div className={c.loopA} {...bindA} aria-label="Loop start" aria-valuetext={`${(a * 3.6).toFixed(1)} s`} style={bindA.style} />
      <div className={c.loopB} {...bindB} aria-label="Loop end" aria-valuetext={`${(b * 3.6).toFixed(1)} s`} style={bindB.style} />
    </div>
  );
}
