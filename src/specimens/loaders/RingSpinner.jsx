import c from './loaders.module.css';
import { status } from './shared';

/* 1 */ export function RingSpinner() { return <span className={c.ring} {...status('Loading')} />; }
