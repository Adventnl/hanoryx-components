import c from './popovers.module.css';
import { useTip } from './shared';

/* 32 */ export function DefinitionCard() {
  const [open, bind] = useTip(200);
  return <p className={c.note}>See the <span className={c.wrap} {...bind}><a href="#dc" className={c.handle} onClick={(e) => e.preventDefault()}>Golden Gate</a><span role="tooltip" className={`${c.card} ${c.top}`} data-open={open}><i className={c.shot} /><b>Golden Gate Bridge</b><span>A suspension bridge, 1937.</span></span></span>.</p>;
}
