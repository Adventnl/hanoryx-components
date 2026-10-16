import c from './skeletons.module.css';
import { Shell, sk } from './shared';

/* 11 */ export function ActionButtons() {
  return <Shell className={c.btns} label="Loading actions">{sk('5.4rem', '2.2rem', '99px')}{sk('3.6rem', '2.2rem', '99px')}</Shell>;
}
