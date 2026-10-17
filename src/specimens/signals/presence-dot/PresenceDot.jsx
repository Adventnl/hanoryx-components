import { useState } from 'react';
import c from "../signals.module.css";

/* 13 */ export function PresenceDot() {
  const [k, setK] = useState(0);
  const st = ['Online', 'Away', 'Busy', 'Offline'];
  return <button type="button" className={c.presence} data-k={k} aria-label={`MK, ${st[k]}. Press to change`} onClick={() => setK((k + 1) % 4)}><span>MK</span><i /></button>;
}
