import c from './loaders.module.css';
import { status } from './shared';

/* 28 */ export function HexSpin() { return <span className={c.hex} {...status('Loading')}><i /></span>; }
