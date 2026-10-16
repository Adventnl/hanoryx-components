import c from './loaders.module.css';
import { dots, status } from './shared';

/* 11 */ export function SquareSwap() { return <span className={c.squares} {...status('Loading')}>{dots(2)}</span>; }
