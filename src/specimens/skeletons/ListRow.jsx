import c from './skeletons.module.css';
import { Shell, sk } from './shared';

/* 3 */ export function ListRow() {
  return <Shell className={c.row}>{sk('2.6rem', '2.6rem', '50%')}<div>{sk('55%', '0.7rem')}{sk('85%')}</div></Shell>;
}
