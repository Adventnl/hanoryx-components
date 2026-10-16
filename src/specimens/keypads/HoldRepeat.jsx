import { useEffect, useRef, useState } from 'react';
import c from './keypads.module.css';

/* 37 */ export function HoldRepeat() {
  const [n, setN] = useState(10);
  const timer = useRef(0);
  const stop = () => window.clearInterval(timer.current);
  useEffect(() => {
    const t = timer;
    return () => window.clearInterval(t.current);
  }, []);
  const start = (d) => { stop(); setN((v) => v + d); timer.current = window.setInterval(() => setN((v) => v + d), 120); };
  return (
    <div className={c.repeat}>
      <button type="button" aria-label="Decrease, hold to repeat" onPointerDown={() => start(-1)} onPointerUp={stop} onPointerLeave={stop}>−</button>
      <output>{n}</output>
      <button type="button" aria-label="Increase, hold to repeat" onPointerDown={() => start(1)} onPointerUp={stop} onPointerLeave={stop}>+</button>
    </div>
  );
}
