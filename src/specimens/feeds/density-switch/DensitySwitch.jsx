import { useState } from 'react';
import c from "../feeds.module.css";
import { Fd, NAMES, cx } from "../shared";

/* 14 */ export function DensitySwitch() {
  const [d, setD] = useState(false);
  return (
    <Fd label="Density" className={cx(c.list, d && c.tight)}>
      <div className={c.pairR}><b className={c.hd}>Inbox</b><button type="button" className={c.chip} aria-pressed={d} onClick={() => setD((v) => !v)}>{d ? 'Compact' : 'Comfy'}</button></div>
      {NAMES.slice(0, 4).map((n) => <div key={n} className={c.row}><span>{n}</span><small>2m</small></div>)}
    </Fd>
  );
}
