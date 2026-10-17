import { useState } from 'react';
import c from "../tabs.module.css";

/* 29 */ export function CompassTabs() {
  const [k, setK] = useState(0);
  const dirs = ['N', 'E', 'S', 'W'];
  return (
    <div className={c.compass} role="tablist" aria-label="Compass tabs">
      {dirs.map((d, i) => <button key={d} type="button" role="tab" aria-selected={i === k} style={{ '--a': i * 90 }} onClick={() => setK(i)}>{d}</button>)}
      <i style={{ '--k': k }} aria-hidden="true" />
    </div>
  );
}
