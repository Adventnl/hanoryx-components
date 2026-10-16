import c from './toasts.module.css';
import { Fire, Toast, useQueue } from './shared';

/* 39 */ export function HoverToHold() {
  const [list, push, drop, ms] = useQueue(3000, 1);
  return (
    <div className={c.stage}>
      <Fire onClick={() => push({})}>Show</Fire>
      {list.map((t) => <Toast key={t.id} t={t} ms={ms} drop={drop} className={`${c.toast} ${c.timed}`}>Hover to hold me<i aria-hidden="true" /></Toast>)}
    </div>
  );
}
