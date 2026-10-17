import { useEffect, useRef, useState } from 'react';
import { useDrag, useLive } from "../../../stage/hooks";
import { usePrefersReducedMotion } from "../../../core/hooks/use-prefers-reduced-motion/usePrefersReducedMotion";
import c from "../cockpit.module.css";
import { SEQ } from "../shared";

/* 27 */ export function ThrottleLever() {
  const [v, bind, set] = useDrag({ mode: 'y', init: 0.3 });
  const live = useLive();
  const [touched, setTouched] = useState(false);
  const reduced = usePrefersReducedMotion();
  const idx = useRef(0);
  useEffect(() => {
    if (!live || reduced || touched) return undefined;
    const id = setInterval(() => { idx.current += 1; set(SEQ[idx.current % SEQ.length]); }, 2000);
    return () => clearInterval(id);
  }, [live, reduced, touched, set]);
  return (
    <div className={c.throttle}>
      <div {...bind} onPointerDown={(e) => { setTouched(true); bind.onPointerDown(e); }} aria-label="Throttle lever" aria-valuetext={`${Math.round(v * 100)} percent`} style={{ ...bind.style, '--v': v }}><i /><b /></div>
      <output>{Math.round(v * 100)}%</output>
    </div>
  );
}
