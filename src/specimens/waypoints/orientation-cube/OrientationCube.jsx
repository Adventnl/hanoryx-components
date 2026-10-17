import { useState } from 'react';
import { Ico } from "../../../stage/components/icons/icons";
import c from "../waypoints.module.css";

/* 39 */ export function OrientationCube() {
  const [k, setK] = useState(0);
  const faces = ['Front', 'Right', 'Back', 'Left'];
  return (
    <div className={c.cube}>
      <div className={c.cubeBox} style={{ '--k': k }} aria-hidden="true">{faces.map((f, i) => <b key={f} style={{ '--i': i }}>{f}</b>)}</div>
      <div><button type="button" aria-label="Turn left" onClick={() => setK(k - 1)}><Ico n="left" /></button><output aria-live="polite">{faces[((k % 4) + 4) % 4]}</output><button type="button" aria-label="Turn right" onClick={() => setK(k + 1)}><Ico n="right" /></button></div>
    </div>
  );
}
