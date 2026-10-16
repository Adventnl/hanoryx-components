import c from './loaders.module.css';
import { dots, status } from './shared';

/* 39 */ export function DotRace() { return <span className={c.race} {...status('Loading')}>{dots(4)}</span>; }
