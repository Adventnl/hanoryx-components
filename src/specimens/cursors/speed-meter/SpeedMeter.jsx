import { useEffect, useRef } from 'react';
import c from "../cursors.module.css";

/* 34 */ export function SpeedMeter() {
  const ref = useRef(null);
  const last = useRef([0, 0, 0]);
  const decay = useRef(0);
  useEffect(() => () => clearTimeout(decay.current), []);
  const put = (v) => ref.current?.style.setProperty('--s', v.toFixed(3));
  return (
    <div ref={ref} className={`${c.area} ${c.speed}`} role="application" aria-label="Speed meter. Move the pointer here." tabIndex={0} onPointerMove={(e) => { const t = performance.now(); const [px, py, pt] = last.current; put(Math.min(1, Math.hypot(e.clientX - px, e.clientY - py) / Math.max(1, t - pt) / 3)); last.current = [e.clientX, e.clientY, t]; clearTimeout(decay.current); decay.current = setTimeout(() => put(0), 140); }} onPointerLeave={() => put(0)}>
      <i /><span>speed</span>
    </div>
  );
}
