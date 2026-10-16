import c from './loaders.module.css';
import { dots, status } from './shared';

/* 16 */ export function HelixDots() { return <span className={c.helix} {...status('Loading')}>{dots(8)}</span>; }
