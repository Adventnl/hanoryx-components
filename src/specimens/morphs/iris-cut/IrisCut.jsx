import { useState } from 'react';
import c from "../morphs.module.css";

/* 40 */ export function IrisCut() {
  const [on, setOn] = useState(true);
  return <div className={c.stage}><button type="button" className={c.iris} data-on={on} aria-pressed={on} aria-label="Picture. Click to close the iris" onClick={() => setOn((v) => !v)}><i /></button></div>;
}
