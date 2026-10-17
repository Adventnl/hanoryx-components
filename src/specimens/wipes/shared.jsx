import { useEffect, useRef, useState } from 'react';
import { useLive } from '../../stage/hooks';
import { usePrefersReducedMotion } from "../../core/hooks/use-prefers-reduced-motion/usePrefersReducedMotion";
import c from './wipes.module.css';

/* a toggle that flips itself while on screen until it has been pressed */
export function useWipe(every = 2600) {
  const [b, setB] = useState(false);
  const touched = useRef(false);
  const live = useLive();
  const reduced = usePrefersReducedMotion();
  useEffect(() => {
    if (!live || reduced) return undefined;
    const first = setTimeout(() => { if (!touched.current) setB((v) => !v); }, 700);
    const id = setInterval(() => { if (!touched.current) setB((v) => !v); }, every);
    return () => { clearTimeout(first); clearInterval(id); };
  }, [live, reduced, every]);
  return [b, () => { touched.current = true; setB((v) => !v); }];
}

/* one wipe: kind picks the rule (see the stylesheet), name labels it for assistive technology */
export function Wipe({ kind, name }) {
  const [b, flip] = useWipe();
  return (
    <button type="button" className={`${c.wipe} ${c[kind]}`} data-b={b} aria-pressed={b} aria-label={`${name}. Press to run it again`} onClick={flip}>
      <span className={c.a}><b>A</b></span>
      <span className={c.b}><b>B</b></span>
    </button>
  );
}

export const make = (kind, name) => function Specimen() { return <Wipe kind={kind} name={name} />; };
