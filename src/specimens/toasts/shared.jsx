import { useCallback, useEffect, useRef, useState } from 'react';
import { useLive } from '../../stage/hooks';
import { usePrefersReducedMotion } from '../../core/hooks/usePrefersReducedMotion';
import c from './toasts.module.css';

/* a queue of toasts: push adds one, each leaves after `ms` unless it is hovered or focused.
   While its specimen is on screen a queue also fires one now and then by itself, so a
   stage is never an empty box (not under reduced motion). */
export function useQueue(ms = 2800, max = 3, auto = true) {
  const [list, setList] = useState([]);
  const n = useRef(0);
  const live = useLive();
  const reduced = usePrefersReducedMotion();
  const push = useCallback((t) => { n.current += 1; setList((l) => [...l.slice(-(max - 1)), { id: n.current, ...t }]); }, [max]);
  useEffect(() => {
    if (!auto || !live || reduced) return undefined;
    const first = setTimeout(() => push({}), 700);
    const loop = setInterval(() => push({}), ms + 2400);
    return () => { clearTimeout(first); clearInterval(loop); };
  }, [auto, live, reduced, ms, push]);
  const drop = (id) => setList((l) => l.filter((x) => x.id !== id));
  return [list, push, drop, ms];
}

export function Toast({ t, ms, drop, className, children, paused }) {
  const [hold, setHold] = useState(false);
  const left = useRef(ms);
  const started = useRef(0);
  useEffect(() => {
    if (hold || paused) return undefined;
    started.current = Date.now();
    const id = setTimeout(() => drop(t.id), left.current);
    return () => { clearTimeout(id); left.current = Math.max(400, left.current - (Date.now() - started.current)); };
  }, [hold, paused, drop, t.id]);
  return (
    <div role="status" className={className} data-hold={hold} style={{ '--ms': `${ms}ms` }} onPointerEnter={() => setHold(true)} onPointerLeave={() => setHold(false)} onFocus={() => setHold(true)} onBlur={() => setHold(false)}>
      {children}
    </div>
  );
}

export const Fire = ({ onClick, children = 'Show toast' }) => <button type="button" className={c.fire} onClick={onClick}>{children}</button>;
