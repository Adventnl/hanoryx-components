import c from './progress.module.css';
import { run } from './shared';

/* 42 */ export function OdometerFill() {
  return <div className={c.odo} {...run('Odometer')}>{['hundreds', 'tens', 'ones'].map((d) => <span key={d} data-d={d}><i /></span>)}<b>%</b></div>;
}
