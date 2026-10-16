import c from './popovers.module.css';
import { useTip } from './shared';

/* 12 */ export function TermTooltip() {
  const [open, bind] = useTip();
  return <p className={c.note}>A good <span className={c.wrap}><button type="button" className={c.term} aria-describedby="tp-12" {...bind}>kerning</button><span id="tp-12" role="tooltip" className={`${c.tip} ${c.top} ${c.rich}`} data-open={open}>The space between two letters, adjusted by eye.</span></span> is felt, not seen.</p>;
}
