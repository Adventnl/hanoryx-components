import c from './progress.module.css';
import { run } from './shared';

/* 23 */ export function PercentRider() { return <div className={c.rider} {...run('Percent rider')}><i /><b /></div>; }
