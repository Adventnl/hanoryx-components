import c from './cursors.module.css';
import { Area, dots } from './shared';

/* 41 */ export function Smear() { return <Area label="Smear" className={c.smear}>{dots(12)}</Area>; }
