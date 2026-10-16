import c from './progress.module.css';
import { cells, run } from './shared';

/* 31 */ export function LevelMeter() { return <div className={c.vu} {...run('Level meter')}>{cells(12)}</div>; }
