import { useState } from 'react';
import c from './popovers.module.css';
import { Trigger, useOpen } from './shared';

/* 15 */ export function ReactionPopover() {
  const [open, setOpen, ref] = useOpen();
  const [v, setV] = useState('');
  return (
    <div ref={ref} className={c.wrap}>
      <Trigger aria-haspopup="dialog" aria-expanded={open} onClick={() => setOpen(!open)}>{v || 'React'}</Trigger>
      {open && <div className={`${c.pop} ${c.top} ${c.faces}`} role="dialog" aria-label="Reactions">{['❤', '★', '✦', '☻', '☀'].map((f) => <button key={f} type="button" aria-label={f} onClick={() => { setV(f); setOpen(false); }}>{f}</button>)}</div>}
    </div>
  );
}
