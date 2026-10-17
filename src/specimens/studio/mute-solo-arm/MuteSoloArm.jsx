import { useState } from 'react';
import c from "../studio.module.css";

/* 8 */ export function MuteSoloArm() {
  const [s, setS] = useState({ M: false, S: true, R: false });
  return <div className={c.msr} role="group" aria-label="Mute, solo, arm">{['M', 'S', 'R'].map((k) => <button key={k} type="button" aria-pressed={s[k]} aria-label={{ M: 'Mute', S: 'Solo', R: 'Record arm' }[k]} data-k={k} onClick={() => setS((o) => ({ ...o, [k]: !o[k] }))}>{k}</button>)}</div>;
}
