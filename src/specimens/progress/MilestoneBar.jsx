import c from './progress.module.css';
import { run } from './shared';

/* 36 */ export function MilestoneBar() {
  return <div className={c.miles} {...run('Milestones')}><i />{[0, 1, 2, 3].map((k) => <span key={k} style={{ '--k': k }} />)}</div>;
}
