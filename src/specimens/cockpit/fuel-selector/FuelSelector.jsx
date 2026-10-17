import { useState } from 'react';
import c from "../cockpit.module.css";

/* 39 */ export function FuelSelector() {
  const [k, setK] = useState(2);
  const pos = ['OFF', 'LEFT', 'BOTH', 'RIGHT'];
  return (
    <div className={c.selector}>
      <button type="button" aria-label={`Fuel selector, ${pos[k]}. Press to turn`} onClick={() => setK((k + 1) % 4)} style={{ '--k': k }}><i /></button>
      {pos.map((p, i) => <span key={p} data-on={i === k} style={{ '--a': i }}>{p}</span>)}
    </div>
  );
}
