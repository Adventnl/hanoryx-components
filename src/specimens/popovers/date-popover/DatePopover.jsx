import { useState } from 'react';
import c from "../popovers.module.css";
import { Trigger, useOpen } from "../shared";

/* 14 */ export function DatePopover() {
  const [open, setOpen, ref] = useOpen();
  const [v, setV] = useState('Today');
  return (
    <div ref={ref} className={c.wrap}>
      <Trigger aria-haspopup="listbox" aria-expanded={open} onClick={() => setOpen(!open)}>{v}</Trigger>
      {open && <ul className={`${c.pop} ${c.bottom} ${c.list}`} role="listbox" aria-label="When">{['Today', 'Tomorrow', 'Next week'].map((t) => <li key={t}><button type="button" role="option" aria-selected={t === v} onClick={() => { setV(t); setOpen(false); }}>{t}</button></li>)}</ul>}
    </div>
  );
}
