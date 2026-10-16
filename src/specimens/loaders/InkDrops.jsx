import c from './loaders.module.css';
import { status } from './shared';

/* 31 */ export function InkDrops() { return <span className={c.ink} {...status('Loading')}><i /><i /><i /></span>; }
