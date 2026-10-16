import { useToggle } from '../../stage/hooks';
import c from './toasts.module.css';
import { Fire } from './shared';

/* 23 */ export function NotificationPanel() {
  const [open, flip] = useToggle();
  return (
    <div className={c.drawerBox}>
      <Fire onClick={flip}>{open ? 'Close panel' : 'Open panel'}</Fire>
      <aside className={c.drawer} data-open={open} aria-label="Notifications panel" inert={!open || undefined}>{['Build passed', 'Review requested', 'Mention in #ops'].map((t) => <p key={t}>{t}</p>)}</aside>
    </div>
  );
}
