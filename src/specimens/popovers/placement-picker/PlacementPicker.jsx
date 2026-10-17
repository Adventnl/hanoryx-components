import { useState } from 'react';
import c from "../popovers.module.css";

/* 40 */ export function PlacementPicker() {
  const all = ['top-start', 'top', 'top-end', 'left', 'right', 'bottom-start', 'bottom', 'bottom-end'];
  const [p, setP] = useState('top');
  return (
    <div className={c.place}>
      <div className={c.placeStage}><span data-p={p}>{p}</span><i /></div>
      <div role="radiogroup" aria-label="Placement">{all.map((a) => <button key={a} type="button" role="radio" aria-checked={a === p} aria-label={a} data-p={a} onClick={() => setP(a)} />)}</div>
    </div>
  );
}
