import { useState } from 'react';
import c from "../toasts.module.css";
import { Fire, Toast, useQueue } from "../shared";

/* 8 */ export function StackedNotices() {
  const [list, push, drop] = useQueue(60000, 3, false);
  const [k, setK] = useState(0);
  return (
    <div className={c.stage}>
      <Fire onClick={() => { setK(k + 1); push({ k: k + 1 }); }}>Add notice</Fire>
      <div className={c.pile}>{list.map((t, i) => <Toast key={t.id} t={t} ms={60000} drop={drop} className={c.pileItem} paused><span style={{ '--d': list.length - 1 - i }}>Notice {t.k}</span><button type="button" aria-label={`Dismiss notice ${t.k}`} onClick={() => drop(t.id)}>×</button></Toast>)}</div>
    </div>
  );
}
