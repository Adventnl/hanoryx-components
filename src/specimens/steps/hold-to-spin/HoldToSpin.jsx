import { useEffect, useRef, useState } from 'react';
import { clamp } from "../../../stage/hooks";
import { Ico } from "../../../stage/components/icons/icons";
import c from "../steps.module.css";

/* 19 */ export function HoldToSpin() {
  const [n, setN] = useState(10);
  const timer = useRef(0);
  const stop = () => { clearInterval(timer.current); timer.current = 0; };
  useEffect(() => stop, []);
  const hold = (d) => { setN((v) => clamp(v + d, 0, 99)); stop(); let speed = 0; timer.current = setInterval(() => { speed += 1; setN((v) => clamp(v + d * (speed > 8 ? 5 : 1), 0, 99)); }, 120); };
  return (
    <div className={c.qty} role="group" aria-label="Hold to spin">
      <button type="button" aria-label="Decrease, hold to repeat" onPointerDown={() => hold(-1)} onPointerUp={stop} onPointerLeave={stop} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setN((v) => clamp(v - 1, 0, 99)); } }}><Ico n="minus" /></button>
      <output aria-live="off">{String(n).padStart(2, '0')}</output>
      <button type="button" aria-label="Increase, hold to repeat" onPointerDown={() => hold(1)} onPointerUp={stop} onPointerLeave={stop} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setN((v) => clamp(v + 1, 0, 99)); } }}><Ico n="plus" /></button>
    </div>
  );
}
