import { useState } from 'react';
import c from "../waypoints.module.css";

/* 8 */ export function Signpost() {
  const [k, setK] = useState(-1);
  const signs = [['Station', '1.2 km', 1], ['Harbour', '3.8 km', -1], ['Old town', '600 m', 1]];
  return (
    <div className={c.post}>
      <i aria-hidden="true" />
      {signs.map(([t, d, dir], i) => <button key={t} type="button" data-dir={dir} data-on={k === i} style={{ '--i': i }} onClick={() => setK(k === i ? -1 : i)}><span>{t}</span><small>{d}</small></button>)}
    </div>
  );
}
