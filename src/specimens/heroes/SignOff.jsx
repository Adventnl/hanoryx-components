import c from './heroes.module.css';
import { Sc } from './shared';

/* 40 */ export function SignOff() {
  return <Sc label="Sign-off" className={c.cen} role="img"><svg viewBox="0 0 120 40" className={c.sig}><path pathLength="100" d="M6 28c8-22 16-26 14-8s-10 20-4 18 14-22 22-22c-6 12-2 18 6 8s6-10 10-6c-4 8 2 8 8 0s8-10 4-4 4 6 10 0 12-8 14-2 8-6 10-10" /></svg><small>With thanks, the Hanoryx team</small></Sc>;
}
