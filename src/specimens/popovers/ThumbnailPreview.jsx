import c from './popovers.module.css';
import { useTip } from './shared';

/* 29 */ export function ThumbnailPreview() {
  const [open, bind] = useTip();
  return <span className={c.wrap}><button type="button" className={c.thumb} aria-describedby="tp-29" aria-label="Cover, preview on hover" {...bind} /><span id="tp-29" role="tooltip" className={`${c.big} ${c.right}`} data-open={open} /></span>;
}
