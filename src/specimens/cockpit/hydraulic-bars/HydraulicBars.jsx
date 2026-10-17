import { useState } from 'react';
import c from "../cockpit.module.css";

/* 37 */ export function HydraulicBars() {
  const [v, setV] = useState([0.8, 0.62, 0.35]);
  return (
    <div className={c.hyd} role="group" aria-label="Hydraulic quantities">
      {v.map((x, k) => <button key={k} type="button" aria-label={`System ${k + 1}, ${Math.round(x * 100)} percent. Press to change`} onClick={() => setV((a) => a.map((y, j) => (j === k ? (y > 0.85 ? 0.2 : y + 0.2) : y)))} data-low={x < 0.4} style={{ '--v': x }}><i /><span>{k + 1}</span></button>)}
    </div>
  );
}
