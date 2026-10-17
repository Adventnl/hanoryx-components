import { useState } from 'react';
import c from "../beams.module.css";

/* 10 */ export function Tripwire() {
  const [cut, setCut] = useState(false);
  return (
    <button type="button" className={c.sw} aria-pressed={cut} onClick={() => setCut((v) => !v)} aria-label="Tripwire laser. Click to break the beam">
      <i className={c.wire} data-cut={cut} /><b className={c.emit} style={{ left: '4%' }} /><b className={c.emit} style={{ right: '4%' }} />
      <span className={c.alarm} data-cut={cut}>{cut ? 'BROKEN' : 'CLEAR'}</span>
    </button>
  );
}
