import c from './loaders.module.css';
import { status } from './shared';

/* 2 */ export function TwinRing() { return <span className={c.dual} {...status('Loading')}><i /><i /></span>; }
