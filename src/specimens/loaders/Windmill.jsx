import c from './loaders.module.css';
import { status } from './shared';

/* 25 */ export function Windmill() { return <span className={c.mill} {...status('Loading')}><i /><i /><i /><i /></span>; }
