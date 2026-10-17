import c from "../toasts.module.css";
import { Fire, Toast, useQueue } from "../shared";

/* 20 */ export function ImageToast() {
  const [list, push, drop, ms] = useQueue(3600, 1);
  return (
    <div className={c.stage}>
      <Fire onClick={() => push({})}>Snap</Fire>
      {list.map((t) => <Toast key={t.id} t={t} ms={ms} drop={drop} className={c.toast}><i className={c.thumb} /><span><b>Screenshot saved</b>to Pictures</span></Toast>)}
    </div>
  );
}
