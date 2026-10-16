import { Ico } from '../../stage/icons';
import c from './toasts.module.css';
import { Fire, Toast, useQueue } from './shared';

/* 2 */ export function SuccessToast() {
  const [list, push, drop, ms] = useQueue();
  return <div className={c.stage}><Fire onClick={() => push({})}>Save</Fire>{list.map((t) => <Toast key={t.id} t={t} ms={ms} drop={drop} className={`${c.toast} ${c.ok}`}><Ico n="check" />Saved to your library</Toast>)}</div>;
}
