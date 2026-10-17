import { useState } from 'react';
import c from "../morphs.module.css";

/* 13 */ export function PillToDisc() {
  const [on, setOn] = useState(false);
  return <div className={c.stage}><button type="button" className={c.pill} data-on={on} aria-pressed={on} aria-label="Pill. Click to make it a circle" onClick={() => setOn((v) => !v)}><span>pill</span></button></div>;
}
