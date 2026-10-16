import c from './cursors.module.css';
import { Area, dots } from './shared';

/* 5 */ export function TrailingDots() { return <Area label="Trailing dots" className={c.trail}>{dots(8)}</Area>; }
