import c from './loaders.module.css';
import { dots, status } from './shared';

/* 27 */ export function NineGrid() { return <span className={c.grid9} {...status('Loading')}>{dots(9)}</span>; }
