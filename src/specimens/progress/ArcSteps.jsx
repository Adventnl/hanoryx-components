import c from './progress.module.css';
import { cells, run } from './shared';

/* 37 */ export function ArcSteps() { return <div className={c.arcs} {...run('Arc steps')}>{cells(5)}</div>; }
