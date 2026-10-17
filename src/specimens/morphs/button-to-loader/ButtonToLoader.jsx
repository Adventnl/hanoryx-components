import { useState } from 'react';
import c from "../morphs.module.css";

/* 29 */ export function ButtonToLoader() {
  const [on, setOn] = useState(false);
  return (
    <div className={c.stage}>
      <button type="button" className={c.loadBtn} data-on={on} aria-busy={on} aria-label={on ? 'Saving' : 'Save'} onClick={() => setOn((v) => !v)}><span>Save</span><i /></button>
    </div>
  );
}
