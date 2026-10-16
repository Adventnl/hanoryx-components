import c from './progress.module.css';
import { cells, run } from './shared';

/* 15 */ export function TickRing() { return <div className={c.ticks} {...run('Tick ring')}>{cells(36)}<b /></div>; }
