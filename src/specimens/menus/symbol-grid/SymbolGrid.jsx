import { useState } from 'react';
import c from "../menus.module.css";
import { useOpen } from "../shared";

/* 20 */ export function SymbolGrid() {
  const [open, setOpen, ref] = useOpen();
  const [pick, setPick] = useState('☺');
  const faces = ['☺', '☻', '♥', '★', '☀', '☂', '♪', '✿', '☾', '⚑', '✦', '☕'];
  return (
    <div ref={ref} className={c.emoji}>
      <button type="button" aria-haspopup="dialog" aria-expanded={open} aria-label={`Pick a symbol, now ${pick}`} onClick={() => setOpen(!open)}>{pick}</button>
      {open && <div role="dialog" aria-label="Symbols">{faces.map((f) => <button key={f} type="button" aria-label={f} onClick={() => { setPick(f); setOpen(false); }}>{f}</button>)}</div>}
    </div>
  );
}
