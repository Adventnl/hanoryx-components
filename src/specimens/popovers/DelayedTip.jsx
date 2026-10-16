import { useState } from 'react';
import c from './popovers.module.css';
import { Trigger, useTip } from './shared';

/* 22 */ export function DelayedTip() {
  const [open, bind] = useTip(600);
  const [warm, setWarm] = useState(false);
  return <span className={c.wrap}><Trigger aria-describedby="tp-22" onPointerEnter={() => setWarm(true)} onPointerLeave={() => setWarm(false)} data-warm={warm} {...bind}>Wait for it<i aria-hidden="true" className={c.fuse} /></Trigger><span id="tp-22" role="tooltip" className={`${c.tip} ${c.top}`} data-open={open}>Worth the wait</span></span>;
}
