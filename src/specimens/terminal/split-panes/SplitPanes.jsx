import { useState } from 'react';
import c from "../terminal.module.css";

/* 26 */ export function SplitPanes() {
  const [f, setF] = useState(0);
  const names = ['editor', 'server', 'tests'];
  return (
    <div className={c.panes} role="group" aria-label="Terminal panes"
      onKeyDown={(e) => { if (e.key === 'ArrowRight') setF((v) => (v + 1) % 3); if (e.key === 'ArrowLeft') setF((v) => (v + 2) % 3); }}>
      {names.map((n, i) => (
        <button key={n} type="button" className={c.pane} aria-pressed={f === i} data-p={i} onClick={() => setF(i)}>
          <span className={c.dim}>{n}</span>
          <i /><i /><i />
        </button>
      ))}
    </div>
  );
}
