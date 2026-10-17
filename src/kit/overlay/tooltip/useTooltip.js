import { useId, useRef, useState, useEffect } from 'react';
export function useTooltip({ delay = 300 } = {}) {
  const [open, setOpen] = useState(false);
  const timer = useRef(null);
  const id = useId();
  const show = () => { clearTimeout(timer.current); timer.current = setTimeout(() => setOpen(true), delay); };
  const hide = () => { clearTimeout(timer.current); setOpen(false); };
  useEffect(() => () => clearTimeout(timer.current), []);
  return { open, triggerProps: { 'aria-describedby': open ? id : undefined, onPointerEnter: show, onPointerLeave: hide, onFocus: show, onBlur: hide, onKeyDown: event => { if (event.key === 'Escape') hide(); } }, tooltipProps: { id, role: 'tooltip', hidden: !open } };
}
