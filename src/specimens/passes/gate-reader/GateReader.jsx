import { useEffect, useRef, useState } from 'react';
import c from "../passes.module.css";

/* 35 */
export function GateReader() {
  const [hold, setHold] = useState(false);
  const [ok, setOk] = useState(false);
  const timer = useRef(0);
  useEffect(() => () => window.clearTimeout(timer.current), []);
  const start = () => {
    setHold(true);
    setOk(false);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setOk(true), 900);
  };
  const stop = () => { setHold(false); window.clearTimeout(timer.current); };
  const press = (e) => { if ((e.key === ' ' || e.key === 'Enter') && !e.repeat) { e.preventDefault(); start(); } };
  const lift = (e) => { if (e.key === ' ' || e.key === 'Enter') stop(); };
  return (
    <div className={c.fig}>
      <button
        type="button"
        className={c.gr}
        data-hold={hold}
        data-ok={ok}
        aria-label="Gate reader: press and hold to scan your pass"
        onPointerDown={(e) => { e.currentTarget.setPointerCapture?.(e.pointerId); start(); }}
        onPointerUp={stop}
        onPointerCancel={stop}
        onKeyDown={press}
        onKeyUp={lift}
        onBlur={stop}
        onContextMenu={(e) => e.preventDefault()}
      >
        <span className={c.grRing}><span className={c.grCore}><b>{ok ? 'Valid' : hold ? 'Hold…' : 'Hold'}</b></span></span>
      </button>
      <p className={c.k}>{ok ? 'Gate open' : 'Press and hold to scan'}</p>
    </div>
  );
}
