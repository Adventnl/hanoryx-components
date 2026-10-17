import { useState } from 'react';
import c from "../toasts.module.css";
import { Fire, Toast, useQueue } from "../shared";

/* 6 */ export function UndoToast() {
  const [list, push, drop, ms] = useQueue(4000, 1);
  const [gone, setGone] = useState(false);
  return (
    <div className={c.stage}>
      <Fire onClick={() => { setGone(true); push({}); }}>{gone ? 'Deleted' : 'Delete file'}</Fire>
      {list.map((t) => <Toast key={t.id} t={t} ms={ms} drop={(id) => { drop(id); }} className={c.toast}>File deleted<button type="button" onClick={() => { setGone(false); drop(t.id); }}>Undo</button><i aria-hidden="true" /></Toast>)}
    </div>
  );
}
