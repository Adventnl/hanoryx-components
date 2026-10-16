import c from './progress.module.css';
import { cells, run } from './shared';

/* 40 */ export function NineBars() { return <div className={c.matrix} {...run('Nine bars')}>{cells(9)}</div>; }
