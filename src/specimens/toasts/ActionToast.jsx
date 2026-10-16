import c from './toasts.module.css';
import { Fire, Toast, useQueue } from './shared';

/* 21 */ export function ActionToast() {
  const [list, push, drop, ms] = useQueue(5000, 1);
  return (
    <div className={c.stage}>
      <Fire onClick={() => push({})}>Incoming</Fire>
      {list.map((t) => <Toast key={t.id} t={t} ms={ms} drop={drop} className={`${c.toast} ${c.tall}`}><span><b>Ada commented</b>“Can we ship it?”</span><div><button type="button" onClick={() => drop(t.id)}>Reply</button><button type="button" onClick={() => drop(t.id)}>Mute</button></div></Toast>)}
    </div>
  );
}
