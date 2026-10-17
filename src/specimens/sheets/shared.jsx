import { useEffect, useRef } from 'react';
import { useLive } from '../../stage/hooks';
import { usePrefersReducedMotion } from "../../core/hooks/use-prefers-reduced-motion/usePrefersReducedMotion";
import c from './sheets.module.css';

export function Stage({ label, children, className = '', onEscape }) {
  return <div className={`${c.stage} ${className}`} role="group" aria-label={label} onKeyDown={(e) => { if (e.key === 'Escape') onEscape?.(); }}>{children}</div>;
}

/* the button that opens a stage's sheet. Until someone presses it, it opens and closes the sheet
   by itself now and then while the specimen is on screen, so a stage is never an empty box
   (not under reduced motion). */
export function Open({ on, set, children = 'Open' }) {
  const live = useLive();
  const reduced = usePrefersReducedMotion();
  const touched = useRef(false);
  const latest = useRef(set);
  useEffect(() => { latest.current = set; });
  useEffect(() => {
    if (!live || reduced) return undefined;
    let off = 0;
    const cycle = () => {
      if (touched.current) return;
      latest.current(true);
      off = setTimeout(() => { if (!touched.current) latest.current(false); }, 2300);
    };
    const first = setTimeout(cycle, 1100);
    const loop = setInterval(cycle, 6800);
    return () => { clearTimeout(first); clearTimeout(off); clearInterval(loop); };
  }, [live, reduced]);
  return <button type="button" className={c.open} aria-expanded={on} onClick={() => { touched.current = true; set(!on); }}>{on ? 'Close' : children}</button>;
}
