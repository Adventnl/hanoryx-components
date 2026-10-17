import { useState } from 'react';
import c from "../popovers.module.css";

/* 25 */ export function ChartTip() {
  const [k, setK] = useState(-1);
  const v = [34, 52, 41, 70, 58, 80];
  return (
    <div className={c.chart} onPointerLeave={() => setK(-1)}>
      {v.map((h, i) => <button key={i} type="button" aria-label={`Month ${i + 1}: ${h}`} style={{ height: `${h}%` }} onPointerEnter={() => setK(i)} onFocus={() => setK(i)} onBlur={() => setK(-1)}>{k === i && <em>{h}</em>}</button>)}
    </div>
  );
}
