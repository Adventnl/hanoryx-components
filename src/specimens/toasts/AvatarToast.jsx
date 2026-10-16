import c from './toasts.module.css';
import { Fire, Toast, useQueue } from './shared';

/* 19 */ export function AvatarToast() {
  const [list, push, drop, ms] = useQueue(3600, 1);
  return (
    <div className={c.stage}>
      <Fire onClick={() => push({})}>Message</Fire>
      {list.map((t) => <Toast key={t.id} t={t} ms={ms} drop={drop} className={c.toast}><i className={c.av}>MK</i><span><b>Mira</b>Lunch at one?</span></Toast>)}
    </div>
  );
}
