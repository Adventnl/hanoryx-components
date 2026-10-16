import c from './toasts.module.css';
import { Fire, Toast, useQueue } from './shared';

/* 18 */ export function CornerPop() {
  const [list, push, drop, ms] = useQueue(3000, 2);
  return (
    <div className={c.stage}>
      <Fire onClick={() => push({})}>Pop</Fire>
      {list.map((t) => <Toast key={t.id} t={t} ms={ms} drop={drop} className={c.corner}>Hello <span aria-hidden="true">✦</span></Toast>)}
    </div>
  );
}
