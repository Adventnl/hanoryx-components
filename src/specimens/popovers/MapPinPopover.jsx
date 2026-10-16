import { useState } from 'react';
import c from './popovers.module.css';

/* 30 */ export function MapPinPopover() {
  const [k, setK] = useState(0);
  const pins = [[24, 56, 'Harbour café'], [58, 36, 'Old library'], [78, 62, 'Night market']];
  return (
    <div className={c.map}>
      {pins.map(([x, y], i) => <button key={i} type="button" aria-label={pins[i][2]} aria-pressed={i === k} style={{ left: `${x}%`, top: `${y}%` }} onClick={() => setK(i)} />)}
      <aside style={{ left: `${pins[k][0]}%`, top: `${pins[k][1]}%` }} role="note" key={k}><b>{pins[k][2]}</b><small>4 min walk</small></aside>
    </div>
  );
}
