import { useEffect, useState } from 'react';
import { useLive, pad2 } from "../../../stage/hooks";
import c from "../figures.module.css";

/* 5 */ export function Stopwatch() {
  const [ms, setMs] = useState(0);
  const [on, setOn] = useState(false);
  const live = useLive();
  useEffect(() => {
    if (!on || !live) return undefined;
    const id = window.setInterval(() => setMs((m) => m + 50), 50);
    return () => window.clearInterval(id);
  }, [on, live]);
  return (
    <div className={c.fig}>
      <output className={c.watch}>{pad2(Math.floor(ms / 60000))}:{pad2(Math.floor(ms / 1000) % 60)}<small>.{pad2(Math.floor(ms / 10) % 100)}</small></output>
      <div className={c.pair}>
        <button type="button" aria-pressed={on} onClick={() => setOn(!on)}>{on ? 'Stop' : 'Start'}</button>
        <button type="button" onClick={() => { setOn(false); setMs(0); }}>Reset</button>
      </div>
    </div>
  );
}
