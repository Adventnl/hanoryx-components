import c from './loaders.module.css';
import { status } from './shared';

/* 13 */ export function FlipLoader() { return <span className={c.flip} {...status('Loading')}><i /></span>; }
