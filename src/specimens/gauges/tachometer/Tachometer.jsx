import { useEffect, useState } from 'react';
import c from "../gauges.module.css";
import { Ticks, arc } from "../shared";

/* 5 */ const REV = [0.62, 0.9, 0.76, 0.97];

const REVS = ['0', '1', '2', '3', '4', '5', '6', '7', '8'];

export function Tachometer() {
  const [n, setN] = useState(0);
  const [hot, setHot] = useState(false);
  useEffect(() => {
    if (!hot) return undefined;
    const id = window.setTimeout(() => setHot(false), 700);
    return () => window.clearTimeout(id);
  }, [hot, n]);
  const v = hot ? REV[n % REV.length] : 0.2;
  return (
    <button type="button" className={c.round} style={{ '--v': v }} aria-label="Tachometer, click to rev the engine" onClick={() => { setN(n + 1); setHot(true); }}>
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <path className={c.rail} d={arc(50, 50, 46, -135, 135)} />
        <path className={c.hot} d={arc(50, 50, 46, 84, 135)} />
        <Ticks n={16} from={-135} to={135} r={42} len={3} major={2} majorLen={6} labels={REVS} labelR={30} />
        <g className={c.nd}><g className={c.jit}><path d="M50 14 L48.4 50 H51.6Z" /></g></g>
        <circle className={c.hub} cx="50" cy="50" r="4.5" />
        <text className={c.unit} x="50" y="68" textAnchor="middle">×1000 RPM</text>
      </svg>
    </button>
  );
}
