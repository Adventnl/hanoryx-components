import c from './progress.module.css';
import { cells, run } from './shared';

/* 35 */ export function TwelveDots() { return <div className={c.clockP} {...run('Twelve dots')}>{cells(12)}</div>; }
