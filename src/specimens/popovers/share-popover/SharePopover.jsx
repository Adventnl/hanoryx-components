import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../popovers.module.css";
import { Trigger, useOpen } from "../shared";

/* 18 */ export function SharePopover() {
  const [open, setOpen, ref] = useOpen();
  const [done, setDone] = useState(false);
  return (
    <div ref={ref} className={c.wrap}>
      <Trigger aria-haspopup="dialog" aria-expanded={open} onClick={() => { setOpen(!open); setDone(false); }}><Ico n="share" />Share</Trigger>
      {open && <div className={`${c.pop} ${c.bottom}`} role="dialog" aria-label="Share"><code>hnx.sh/abc12</code><button type="button" onClick={() => setDone(true)}>{done ? 'Copied ✓' : 'Copy link'}</button></div>}
    </div>
  );
}
