import { Ico } from '../../stage/icons';
import c from './toasts.module.css';
import { Fire, Toast, useQueue } from './shared';

/* 3 */ export function FailureToast() {
  const [list, push, drop, ms] = useQueue(3200);
  return <div className={c.stage}><Fire onClick={() => push({})}>Break it</Fire>{list.map((t) => <Toast key={t.id} t={t} ms={ms} drop={drop} className={`${c.toast} ${c.bad}`}><Ico n="close" />Could not reach the server</Toast>)}</div>;
}
