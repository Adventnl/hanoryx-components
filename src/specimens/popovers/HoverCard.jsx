import c from './popovers.module.css';
import { useTip } from './shared';

/* 4 */ export function HoverCard() {
  const [open, bind] = useTip(250);
  return (
    <span className={c.wrap} {...bind}>
      <a href="#hc" className={c.handle} onClick={(e) => e.preventDefault()}>@mira</a>
      <span role="tooltip" className={`${c.card} ${c.top}`} data-open={open}><i>MK</i><b>Mira Kade</b><small>Design lead · Lisbon</small><span>Ships small things, often.</span></span>
    </span>
  );
}
