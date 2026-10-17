import { useState } from 'react';
import c from "../menus.module.css";
import { useOpen } from "../shared";

/* 36 */ export function ColourMenu() {
  const [open, setOpen, ref] = useOpen();
  const [v, setV] = useState('#ff3333');
  const cols = ['#ff3333', '#ff9f43', '#feca57', '#1dd1a1', '#54a0ff', '#a29bfe', '#ffffff', '#576574'];
  return (
    <div ref={ref} className={c.colours}>
      <button type="button" aria-haspopup="dialog" aria-expanded={open} aria-label={`Colour ${v}`} style={{ '--v': v }} onClick={() => setOpen(!open)}><i /></button>
      {open && <div role="dialog" aria-label="Colours">{cols.map((h) => <button key={h} type="button" aria-label={h} aria-pressed={h === v} style={{ '--v': h }} onClick={() => { setV(h); setOpen(false); }} />)}</div>}
    </div>
  );
}
