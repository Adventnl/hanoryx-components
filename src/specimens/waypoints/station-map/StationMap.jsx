import { useState } from 'react';
import c from "../waypoints.module.css";

/* 40 */ export function StationMap() {
  const [k, setK] = useState(3);
  const st = [[10, 30], [30, 12], [52, 30], [72, 12], [92, 30]];
  return (
    <div className={c.stations}>
      <svg viewBox="0 0 100 42" aria-hidden="true"><path d={st.map(([x, y], i) => `${i ? 'L' : 'M'}${x} ${y}`).join('')} className={c.sBase} /><path d={st.slice(0, k + 1).map(([x, y], i) => `${i ? 'L' : 'M'}${x} ${y}`).join('')} className={c.sOn} /></svg>
      {st.map(([x, y], i) => <button key={i} type="button" aria-label={`Station ${i + 1}`} aria-pressed={i === k} data-on={i <= k} style={{ left: `${x}%`, top: `${(y / 42) * 100}%` }} onClick={() => setK(i)} />)}
    </div>
  );
}
