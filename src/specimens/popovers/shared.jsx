import { useEffect, useRef, useState } from 'react';
import { useLive } from '../../stage/hooks';
import { usePrefersReducedMotion } from '../../core/hooks/usePrefersReducedMotion';
import c from './popovers.module.css';

export function useOpen(init = false) {
  const [open, setOpen] = useState(init);
  const ref = useRef(null);
  useEffect(() => {
    if (!open) return undefined;
    const down = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const key = (e) => { if (e.key === 'Escape') { setOpen(false); ref.current?.querySelector('button')?.focus(); } };
    document.addEventListener('pointerdown', down);
    document.addEventListener('keydown', key);
    return () => { document.removeEventListener('pointerdown', down); document.removeEventListener('keydown', key); };
  }, [open]);
  return [open, setOpen, ref];
}

/* a hover / focus trigger: open on pointer or keyboard focus, close on leave, blur or Escape.
   While its specimen is on screen it also shows itself now and then, so a tooltip is
   never just a button (not under reduced motion). */
export function useTip(delay = 0) {
  const [open, setOpen] = useState(false);
  const [auto, setAuto] = useState(false);
  const timer = useRef(0);
  const live = useLive();
  const reduced = usePrefersReducedMotion();
  const show = () => { clearTimeout(timer.current); timer.current = setTimeout(() => setOpen(true), delay); };
  const hide = () => { clearTimeout(timer.current); setOpen(false); };
  useEffect(() => () => clearTimeout(timer.current), []);
  useEffect(() => {
    if (!live || reduced) return undefined;
    let off = 0;
    const cycle = () => { setAuto(true); off = setTimeout(() => setAuto(false), 1900); };
    const first = setTimeout(cycle, 900);
    const loop = setInterval(cycle, 5400);
    return () => { clearTimeout(first); clearTimeout(off); clearInterval(loop); setAuto(false); };
  }, [live, reduced]);
  return [open || auto, { onPointerEnter: show, onPointerLeave: hide, onFocus: show, onBlur: hide, onKeyDown: (e) => { if (e.key === 'Escape') hide(); } }];
}

export const Trigger = ({ children = 'Hover me', ...rest }) => <button type="button" className={c.trigger} {...rest}>{children}</button>;
