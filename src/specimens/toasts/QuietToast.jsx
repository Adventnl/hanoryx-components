import c from './toasts.module.css';
import { Fire, Toast, useQueue } from './shared';

/* 1 */ export function QuietToast() {
  const [list, push, drop, ms] = useQueue();
  return <div className={c.stage}><Fire onClick={() => push({})} />{list.map((t) => <Toast key={t.id} t={t} ms={ms} drop={drop} className={c.toast}>Settings updated</Toast>)}</div>;
}
