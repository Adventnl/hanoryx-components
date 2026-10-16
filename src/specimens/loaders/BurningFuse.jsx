import c from './loaders.module.css';
import { status } from './shared';

/* 33 */ export function BurningFuse() { return <span className={c.fuse} {...status('Loading')}><i /><b /></span>; }
