import c from './popovers.module.css';
import { Trigger, useTip } from './shared';

/* 3 */ export function RichTooltip() {
  const [open, bind] = useTip();
  return <span className={c.wrap}><Trigger aria-describedby="tp-3" {...bind}>Plan limits</Trigger><span id="tp-3" role="tooltip" className={`${c.tip} ${c.top} ${c.rich}`} data-open={open}><b>Team plan</b>Ten seats, one workspace, no limits on files.</span></span>;
}
