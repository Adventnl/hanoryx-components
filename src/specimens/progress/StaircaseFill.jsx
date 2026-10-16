import c from './progress.module.css';
import { cells, run } from './shared';

/* 33 */ export function StaircaseFill() { return <div className={c.stair} {...run('Staircase')}>{cells(8)}</div>; }
