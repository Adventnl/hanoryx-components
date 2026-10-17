import { useState } from 'react';
import c from "../sheets.module.css";
import { Stage } from "../shared";

/* 31 */ export function MiniWindow() {
  const [s, setS] = useState('open');
  return (
    <Stage label="Window">
      {s === 'open' && <div className={c.win}><header><button type="button" aria-label="Close window" onClick={() => setS('closed')} /><button type="button" aria-label="Minimise window" onClick={() => setS('min')} /><button type="button" aria-label="Zoom window" /><span>Notes</span></header><p>A tiny window.</p></div>}
      {s === 'min' && <button type="button" className={c.dockBtn} onClick={() => setS('open')}>Notes</button>}
      {s === 'closed' && <button type="button" className={c.open} onClick={() => setS('open')}>Reopen</button>}
    </Stage>
  );
}
