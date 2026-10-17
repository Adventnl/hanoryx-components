import { useState } from 'react';
import c from "../popovers.module.css";
import { Trigger, useOpen } from "../shared";

/* 6 */ export function ConfirmPopover() {
  const [open, setOpen, ref] = useOpen();
  const [gone, setGone] = useState(false);
  return (
    <div ref={ref} className={c.wrap}>
      <Trigger aria-haspopup="dialog" aria-expanded={open} onClick={() => { setGone(false); setOpen(!open); }}>{gone ? 'Deleted' : 'Delete'}</Trigger>
      {open && <div className={`${c.pop} ${c.top}`} role="alertdialog" aria-label="Confirm delete"><p>Delete this item?</p><div><button type="button" onClick={() => setOpen(false)}>Keep</button><button type="button" data-bad onClick={() => { setGone(true); setOpen(false); }}>Delete</button></div></div>}
    </div>
  );
}
