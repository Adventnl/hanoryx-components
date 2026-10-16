import c from './feeds.module.css';
import { Fd } from './shared';

/* 12 */ export function TimelineFeed() {
  const E = [['9:02', 'Deploy finished'], ['9:40', 'Ana joined'], ['10:15', 'Invoice paid'], ['11:30', 'Backup done']];
  return <Fd label="Timeline" className={c.tl}>{E.map(([t, x]) => <div key={t}><i /><small>{t}</small><span>{x}</span></div>)}</Fd>;
}
