import c from './loaders.module.css';
import { status } from './shared';

/* 40 */ export function CountingUp() {
  return <span className={c.pct} {...status('Loading')}><i /></span>;
}
