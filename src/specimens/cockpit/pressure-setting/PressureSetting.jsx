import { useState } from 'react';
import c from "../cockpit.module.css";

/* 26 */ export function PressureSetting() {
  const [p, setP] = useState(1013);
  return (
    <div className={c.kolls}>
      <output>{p}<small>hPa</small></output>
      <div><button type="button" aria-label="Lower pressure setting" onClick={() => setP((v) => v - 1)}>−</button><button type="button" aria-label="Standard pressure" onClick={() => setP(1013)}>STD</button><button type="button" aria-label="Raise pressure setting" onClick={() => setP((v) => v + 1)}>+</button></div>
    </div>
  );
}
