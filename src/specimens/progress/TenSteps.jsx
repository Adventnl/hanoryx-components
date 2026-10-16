import c from './progress.module.css';
import { cells, run } from './shared';

/* 4 */ export function TenSteps() { return <div className={c.steps10} {...run('Ten steps')}>{cells(10)}</div>; }
