import { useState } from 'react';
import c from "../toasts.module.css";
import { Fire } from "../shared";

/* 31 */ export function UpdatePrompt() {
  const [s, setS] = useState('ask');
  return (
    <div className={c.stage}>
      {s === 'ask' ? <div role="status" className={`${c.toast} ${c.tall}`}><span><b>Update available</b>Version 2.4 is ready</span><div><button type="button" onClick={() => setS('now')}>Restart</button><button type="button" onClick={() => setS('later')}>Later</button></div></div> : <><p className={c.said}>{s === 'now' ? 'Restarting…' : 'We will ask tomorrow.'}</p><Fire onClick={() => setS('ask')}>Again</Fire></>}
    </div>
  );
}
