import c from './skeletons.module.css';
import { Shell, sk } from './shared';

/* 39 */ export function AlertPlaceholder() {
  return <Shell className={c.notif} label="Loading notifications">{[0, 1, 2].map((k) => <div key={k}>{sk('0.6rem', '0.6rem', '50%')}{sk(`${70 - k * 12}%`)}</div>)}</Shell>;
}
