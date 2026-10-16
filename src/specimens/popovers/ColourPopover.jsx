import { useState } from 'react';
import c from './popovers.module.css';
import { Trigger, useOpen } from './shared';

/* 13 */ export function ColourPopover() {
  const [open, setOpen, ref] = useOpen();
  const [v, setV] = useState('#ff3333');
  const cols = ['#ff3333', '#ff9f43', '#feca57', '#1dd1a1', '#54a0ff', '#a29bfe', '#ffffff', '#576574'];
  return (
    <div ref={ref} className={c.wrap}>
      <Trigger aria-haspopup="dialog" aria-expanded={open} onClick={() => setOpen(!open)}><i className={c.dot} style={{ background: v }} />Colour</Trigger>
      {open && <div className={`${c.pop} ${c.bottom} ${c.grid4}`} role="dialog" aria-label="Colours">{cols.map((h) => <button key={h} type="button" aria-label={h} aria-pressed={h === v} style={{ background: h }} onClick={() => { setV(h); setOpen(false); }} />)}</div>}
    </div>
  );
}
