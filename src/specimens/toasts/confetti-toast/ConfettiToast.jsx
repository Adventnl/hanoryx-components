import { useState } from 'react';
import c from "../toasts.module.css";
import { Fire } from "../shared";

/* 25 */ export function ConfettiToast() {
  const [k, setK] = useState(0);
  return (
    <div className={c.stage}>
      <Fire onClick={() => setK(k + 1)}>Celebrate</Fire>
      {k > 0 && <div key={k} role="status" className={`${c.toast} ${c.party}`}>{Array.from({ length: 14 }, (_, i) => <i key={i} aria-hidden="true" style={{ '--a': i * 25.7, '--h': (i * 47) % 360 }} />)}<b>Goal reached</b></div>}
    </div>
  );
}
