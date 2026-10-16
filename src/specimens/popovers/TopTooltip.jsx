import c from './popovers.module.css';
import { Trigger, useTip } from './shared';

/* 1 */ export function TopTooltip() {
  const [open, bind] = useTip();
  return <span className={c.wrap}><Trigger aria-describedby="tp-1" {...bind}>Hover or focus</Trigger><span id="tp-1" role="tooltip" className={`${c.tip} ${c.top}`} data-open={open}>Saved just now</span></span>;
}
