import { useToggle } from '../../stage/hooks';
import c from './toasts.module.css';
import { Fire } from './shared';

/* 29 */ export function OfflineBar() {
  const [off, flip] = useToggle();
  return (
    <div className={c.offline}>
      <div className={c.offBar} data-off={off} role="status">{off ? 'You are offline. Changes will sync later.' : 'Back online'}</div>
      <Fire onClick={flip}>{off ? 'Go online' : 'Go offline'}</Fire>
    </div>
  );
}
