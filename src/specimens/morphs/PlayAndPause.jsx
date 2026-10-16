import { useState } from 'react';
import c from './morphs.module.css';

/* 15 */ export function PlayAndPause() {
  const [on, setOn] = useState(false);
  return <div className={c.stage}><button type="button" className={c.playp} data-on={on} aria-pressed={on} aria-label={on ? 'Pause' : 'Play'} onClick={() => setOn((v) => !v)}><i /><i /></button></div>;
}
