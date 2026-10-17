import { useState } from 'react';
import c from "../waypoints.module.css";

/* 32 */ export function ZoomLevels() {
  const [k, setK] = useState(1);
  const lv = ['Country', 'City', 'Street', 'Door'];
  return (
    <div className={c.zlev}>
      <div className={c.zmap} style={{ '--k': k }} aria-hidden="true"><i /><i /><i /><b /></div>
      <div role="radiogroup" aria-label="Zoom level">{lv.map((t, i) => <button key={t} type="button" role="radio" aria-checked={i === k} onClick={() => setK(i)}>{t}</button>)}</div>
    </div>
  );
}
