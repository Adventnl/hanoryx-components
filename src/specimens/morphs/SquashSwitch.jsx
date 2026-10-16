import { useState } from 'react';
import c from './morphs.module.css';

/* 32 */ export function SquashSwitch() {
  const [on, setOn] = useState(false);
  return <div className={c.stage}><button type="button" role="switch" aria-checked={on} className={c.squash} data-on={on} aria-label="Switch" onClick={() => setOn((v) => !v)}><i /></button></div>;
}
