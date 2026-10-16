import c from './loaders.module.css';
import { status } from './shared';

/* 36 */ export function PlusMorph() { return <span className={c.morph} {...status('Loading')}><i /><i /></span>; }
