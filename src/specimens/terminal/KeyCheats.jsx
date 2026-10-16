import { useState } from 'react';
import c from './terminal.module.css';

const CHEAT = [['Ctrl R', 'search history'], ['Ctrl A', 'line start'], ['Ctrl E', 'line end'], ['Ctrl W', 'delete word'], ['Ctrl L', 'clear screen'], ['Ctrl C', 'interrupt']];

/* 33 */ export function KeyCheats() {
  const [s, setS] = useState(-1);
  return (
    <div className={c.win}>
      <div className={c.caps}>
        {CHEAT.map(([k], i) => <button key={k} type="button" className={c.cap} aria-pressed={s === i} onPointerDown={() => setS(i)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setS(i); }}>{k}</button>)}
      </div>
      <p className={c.ln} aria-live="polite">{s < 0 ? <span className={c.dim}>press a key</span> : CHEAT[s][1]}</p>
    </div>
  );
}
