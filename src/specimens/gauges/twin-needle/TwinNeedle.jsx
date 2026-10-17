import c from "../gauges.module.css";
import { Ticks, useHot } from "../shared";

/* 28 */ export function TwinNeedle() {
  const [hot, h] = useHot();
  return (
    <button type="button" className={c.round} aria-label="Twin needle gauge, hover to swap the readings" {...h}>
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <circle className={c.face} cx="50" cy="50" r="47" />
        <Ticks n={20} from={-135} to={135} r={44} len={3} major={5} majorLen={6} />
        <text className={c.tag} x="50" y="30" textAnchor="middle">OIL</text>
        <text className={c.tag} x="50" y="76" textAnchor="middle">TEMP</text>
        <g className={c.nd} style={{ '--v': hot ? 0.82 : 0.24 }}><path d="M50 12 L48.4 50 H51.6Z" /></g>
        <g className={`${c.nd} ${c.white}`} style={{ '--v': hot ? 0.3 : 0.74 }}><path d="M50 18 L48.6 50 H51.4Z" /></g>
        <circle className={c.hub} cx="50" cy="50" r="4.5" />
      </svg>
    </button>
  );
}
