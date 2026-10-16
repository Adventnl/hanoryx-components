import c from './progress.module.css';
import { run } from './shared';

/* 30 */ export function PieFill() { return <div className={c.pie} {...run('Pie')} />; }
