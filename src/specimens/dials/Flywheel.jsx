import { useEffect, useState } from 'react';
import { useLive } from '../../stage/hooks';
import c from './dials.module.css';

/* 37 */ export function Flywheel() {
  const [spin, setSpin] = useState(0);
  const live = useLive();
  // the wheel slows by one step every 0.9 s while it is on screen
  useEffect(() => {
    if (!spin || !live) return undefined;
    const id = window.setTimeout(() => setSpin((s) => Math.max(0, s - 1)), 900);
    return () => window.clearTimeout(id);
  }, [spin, live]);
  return (
    <button type="button" className={c.fly} data-s={spin} aria-label="Flywheel, click to spin up" onClick={() => setSpin(Math.min(5, spin + 2))} style={{ '--d': spin ? `${(1.8 / spin).toFixed(2)}s` : '0s' }}>
      <i /><span>{spin * 120} RPM</span>
    </button>
  );
}
