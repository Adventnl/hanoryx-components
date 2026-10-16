import c from './progress.module.css';
import { run } from './shared';

/* 2 */ export function StripedBar() { return <div className={c.striped} {...run('Striped')}><i /></div>; }
