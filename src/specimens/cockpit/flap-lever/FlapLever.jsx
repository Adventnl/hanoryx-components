import { useState } from 'react';
import c from "../cockpit.module.css";

/* 28 */ export function FlapLever() {
  const [k, setK] = useState(1);
  const pos = ['UP', '10°', '20°', '30°'];
  return (
    <div className={c.flaps} role="radiogroup" aria-label="Flap lever">
      <i style={{ '--k': k }} aria-hidden="true" />
      {pos.map((p, i) => <button key={p} type="button" role="radio" aria-checked={i === k} onClick={() => setK(i)}><span>{p}</span></button>)}
    </div>
  );
}
