import c from './popovers.module.css';
import { useTip } from './shared';

/* 28 */ export function TruncatedName() {
  const [open, bind] = useTip();
  return <span className={c.wrap}><button type="button" className={c.trunc} aria-describedby="tp-28" {...bind}>Annual_report_final_v7_reviewed.pdf</button><span id="tp-28" role="tooltip" className={`${c.tip} ${c.top}`} data-open={open}>Annual_report_final_v7_reviewed.pdf</span></span>;
}
