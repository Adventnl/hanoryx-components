import c from './loaders.module.css';
import { status } from './shared';

/* 37 */ export function Pendulum() { return <span className={c.pend} {...status('Loading')}><i /></span>; }
