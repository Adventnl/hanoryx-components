import c from './loaders.module.css';
import { dots, status } from './shared';

/* 17 */ export function NewtonCradle() { return <span className={c.cradle} {...status('Loading')}>{dots(5)}</span>; }
