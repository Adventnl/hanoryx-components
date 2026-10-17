import { useState } from 'react';
import c from "../terminal.module.css";

const MODES = ['NORMAL', 'INSERT', 'VISUAL'];

/* 28 */ export function ModeLine() {
  const [m, setM] = useState(0);
  return (
    <div className={c.win} tabIndex={0} role="group" aria-label="Editor mode: press i, v or Escape"
      onKeyDown={(e) => { if (e.key === 'i') setM(1); else if (e.key === 'v') setM(2); else if (e.key === 'Escape') setM(0); }}>
      <p className={c.ln}><span className={c.dim}>~</span></p>
      <div className={c.mode} data-m={MODES[m]}>
        {MODES.map((x, i) => <button key={x} type="button" aria-pressed={m === i} onClick={() => setM(i)}>{x}</button>)}
        <span>utf-8 · 12:4</span>
      </div>
    </div>
  );
}
