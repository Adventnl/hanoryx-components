import c from './skeletons.module.css';
import { Shell, sk } from './shared';

/* 33 */ export function ShapeLibrary() {
  return <Shell className={c.shapes} label="Loading shapes">{sk('2.4rem', '2.4rem', '50%')}{sk('2.4rem', '2.4rem', '6px')}{sk('4.4rem', '1.6rem', '99px')}{sk('2.4rem', '2.4rem', '50% 0 50% 0')}</Shell>;
}
