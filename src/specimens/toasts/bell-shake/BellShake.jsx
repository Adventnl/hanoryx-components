import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../toasts.module.css";

/* 17 */ export function BellShake() {
  const [n, setN] = useState(0);
  return (
    <div className={c.bell}>
      <button type="button" aria-label={`Notifications, ${n} new`} onClick={() => setN(n === 0 ? 1 : 0)} key={n} data-new={n > 0}><Ico n="bell" />{n > 0 && <b aria-hidden="true">{n}</b>}</button>
      <button type="button" className={c.fire} onClick={() => setN(n + 1)}>New alert</button>
    </div>
  );
}
