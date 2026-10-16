import c from './toasts.module.css';
import { Fire, Toast, useQueue } from './shared';

/* 38 */ export function TimedToast() {
  const [list, push, drop, ms] = useQueue(3500, 1);
  return (
    <div className={c.stage}>
      <Fire onClick={() => push({})}>Show</Fire>
      {list.map((t) => <Toast key={t.id} t={t} ms={ms} drop={drop} className={`${c.toast} ${c.timed}`}>Auto-dismiss in 3.5s<i aria-hidden="true" /></Toast>)}
    </div>
  );
}
