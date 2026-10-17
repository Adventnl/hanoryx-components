import { useEffect, useId, useRef, useState } from 'react';
export function useHoverCard({ delay = 250, closeDelay = 150 } = {}) {
  const [open, setOpen] = useState(false);
  const timer = useRef(null);
  const id = useId();
  const schedule = (value, wait) => { clearTimeout(timer.current); timer.current = setTimeout(() => setOpen(value), wait); };
  const enter = () => schedule(true, 0);
  const leave = () => schedule(false, closeDelay);
  const escape = event => { if (event.key === 'Escape') { clearTimeout(timer.current); setOpen(false); } };
  useEffect(() => () => clearTimeout(timer.current), []);
  return { open, triggerProps: { 'aria-describedby': open ? id : undefined, onPointerEnter: () => schedule(true, delay), onPointerLeave: leave, onFocus: enter, onBlur: leave, onKeyDown: escape }, contentProps: { id, role: 'group', hidden: !open, onPointerEnter: enter, onPointerLeave: leave, onFocus: enter, onBlur: leave, onKeyDown: escape } };
}
