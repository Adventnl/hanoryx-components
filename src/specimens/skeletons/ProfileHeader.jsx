import c from './skeletons.module.css';
import { Shell, sk } from './shared';

/* 7 */ export function ProfileHeader() {
  return <Shell className={c.profile}>{sk('100%', '2.4rem', '6px')}<div>{sk('3.4rem', '3.4rem', '50%')}<span>{sk('6rem', '0.8rem')}{sk('9rem')}</span></div></Shell>;
}
