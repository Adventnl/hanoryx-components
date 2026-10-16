import c from './loaders.module.css';
import { dots, status } from './shared';

/* 30 */ export function DotSpiral() { return <span className={c.spiral} {...status('Loading')}>{dots(10)}</span>; }
