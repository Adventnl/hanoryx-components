import c from './progress.module.css';
import { run } from './shared';

/* 12 */ export function TestTube() { return <div className={c.tube} {...run('Test tube')}><i /></div>; }
