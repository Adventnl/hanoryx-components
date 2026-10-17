import { useState } from 'react';
import c from "../handset.module.css";
import { Av, Phone } from "../shared";

/* 17 */ export function SwipeRow() {
  const [open, setOpen] = useState(false);
  return (
    <Phone label="Swipe actions">
      <b className={c.h}>Inbox</b>
      <div className={c.swipe} data-open={open}>
        <span className={c.acts}><button type="button" aria-label="Archive">Arch</button><button type="button" aria-label="Delete">Del</button></span>
        <button type="button" className={c.top} aria-expanded={open} onClick={() => setOpen((v) => !v)}><Av h={40} s="M" /><span><em>Mara</em><small>Lunch?</small></span></button>
      </div>
      <u className={c.line} /><u className={c.line} />
    </Phone>
  );
}
