import { Ico } from "../../../stage/components/icons/icons";
import c from "../toasts.module.css";
import { Fire, Toast, useQueue } from "../shared";

/* 36 */ export function BagToast() {
  const [list, push, drop, ms] = useQueue(3600, 1);
  return (
    <div className={c.stage}>
      <Fire onClick={() => push({})}>Add to bag</Fire>
      {list.map((t) => <Toast key={t.id} t={t} ms={ms} drop={drop} className={`${c.toast} ${c.rise}`}><Ico n="cart" /><span>Added to your bag</span><button type="button" onClick={() => drop(t.id)}>View</button></Toast>)}
    </div>
  );
}
