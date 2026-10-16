import { Ico } from '../../stage/icons';
import c from './toasts.module.css';

const NOTES = [['check', 'Saved', 'All changes stored'], ['bell', 'Reminder', 'Review at five'], ['mail', 'New message', 'From the studio'], ['download', 'Export ready', 'report.pdf'], ['flag', 'Flagged', 'Needs a second look']];

export function Visual() {
  return (
    <div className={c.vis} aria-hidden="true">
      {NOTES.map(([n, t, d], k) => (
        <div key={t} className={c.visToast} style={{ '--k': k }}>
          <Ico n={n} /><b>{t}</b><span>{d}</span>
        </div>
      ))}
      <small>5 NOTICES · 1 STACK</small>
    </div>
  );
}
