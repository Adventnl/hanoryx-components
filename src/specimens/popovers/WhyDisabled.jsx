import c from './popovers.module.css';
import { useTip } from './shared';

/* 27 */ export function WhyDisabled() {
  const [open, bind] = useTip();
  return <span className={c.wrap} {...bind} tabIndex={0} aria-describedby="tp-27" role="group" aria-label="Disabled button with a reason"><button type="button" className={c.trigger} disabled>Publish</button><span id="tp-27" role="tooltip" className={`${c.tip} ${c.top}`} data-open={open}>Add a title first</span></span>;
}
