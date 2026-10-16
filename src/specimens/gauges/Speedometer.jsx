import { useEffect, useState } from 'react';
import { useLive, clamp } from '../../stage/hooks';
import c from './gauges.module.css';
import { Ticks, arc } from './shared';

/* 4 */ const KMH = ['0', '40', '80', '120', '160', '200', '240'];

export function Speedometer() {
  const [on, setOn] = useState(false);
  const [v, setV] = useState(0);
  const live = useLive();
  const rest = v === 0;
  useEffect(() => {
    if (!live || (!on && rest)) return undefined;
    const id = window.setInterval(() => setV((s) => clamp(s + (on ? 0.028 : -0.04))), 50);
    return () => window.clearInterval(id);
  }, [on, rest, live]);
  const go = () => setOn(true);
  const stop = () => setOn(false);
  return (
    <div className={c.speedo} style={{ '--v': v }}>
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <path className={c.rail} d={arc(50, 50, 46, -135, 135)} />
        <path className={c.hot} d={arc(50, 50, 46, 90, 135)} />
        <Ticks n={24} from={-135} to={135} r={42} len={3} major={4} majorLen={6} labels={KMH} labelR={30} />
        <g className={c.nd}><path d="M50 12 L48.3 50 H51.7Z" /></g>
        <circle className={c.hub} cx="50" cy="50" r="4.5" />
      </svg>
      <output>{Math.round(v * 240)}<small> km/h</small></output>
      <button
        type="button"
        aria-label="Hold to accelerate"
        onPointerDown={go}
        onPointerUp={stop}
        onPointerLeave={stop}
        onPointerCancel={stop}
        onKeyDown={(e) => { if ((e.key === ' ' || e.key === 'Enter') && !e.repeat) go(); }}
        onKeyUp={stop}
        onBlur={stop}
      >
        Hold
      </button>
    </div>
  );
}
