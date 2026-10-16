import c from './toasts.module.css';
import { Fire, Toast, useQueue } from './shared';

/* 16 */ export function TimerRingToast() {
  const [list, push, drop, ms] = useQueue(3000, 1);
  return (
    <div className={c.stage}>
      <Fire onClick={() => push({})}>Ping</Fire>
      {list.map((t) => <Toast key={t.id} t={t} ms={ms} drop={drop} className={c.toast}><svg className={c.ringT} viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="10" pathLength="1" /></svg>Closing soon</Toast>)}
    </div>
  );
}
