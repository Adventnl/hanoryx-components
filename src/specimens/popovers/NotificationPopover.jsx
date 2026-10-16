import { Ico } from '../../stage/icons';
import c from './popovers.module.css';
import { useOpen } from './shared';

/* 36 */ export function NotificationPopover() {
  const [open, setOpen, ref] = useOpen();
  return (
    <div ref={ref} className={c.wrap}>
      <button type="button" className={c.bellBtn} aria-haspopup="dialog" aria-expanded={open} aria-label="Notifications, 3 new" onClick={() => setOpen(!open)}><Ico n="bell" /><b>3</b></button>
      {open && <div className={`${c.pop} ${c.bottomR} ${c.notif}`} role="dialog" aria-label="Notifications">{['Build passed', 'Ada commented', 'Invite accepted'].map((t) => <p key={t}>{t}</p>)}</div>}
    </div>
  );
}
