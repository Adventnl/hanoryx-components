import { useState } from 'react';
import c from "../tabs.module.css";

/* 24 */ export function KnobTabs() {
  const [k, setK] = useState(1);
  const labels = ['OFF', 'LOW', 'MID', 'HIGH'];
  return (
    <div className={c.knob}>
      <button type="button" aria-label={`Mode knob, ${labels[k]}. Press to turn`} onClick={() => setK((k + 1) % 4)} style={{ '--k': k }}><i /></button>
      {labels.map((t, i) => <span key={t} data-on={i === k} style={{ '--a': i }}>{t}</span>)}
    </div>
  );
}
