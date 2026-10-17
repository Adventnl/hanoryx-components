import c from "../toasts.module.css";
import { Fire, Toast, useQueue } from "../shared";

/* 10 */ export function Snackbar() {
  const [list, push, drop, ms] = useQueue(3600, 1);
  return (
    <div className={c.stage}>
      <Fire onClick={() => push({})}>Archive</Fire>
      {list.map((t) => <Toast key={t.id} t={t} ms={ms} drop={drop} className={c.snack}><span>Conversation archived</span><button type="button" onClick={() => drop(t.id)}>Undo</button></Toast>)}
    </div>
  );
}
