import { useState } from 'react';
import c from './keypads.module.css';

/* 24 */ export function DoubleConfirm() {
  const [armed, setArmed] = useState(false);
  const [done, setDone] = useState(false);
  const click = () => {
    if (done) { setDone(false); return; }
    if (!armed) { setArmed(true); window.setTimeout(() => setArmed(false), 2400); } else { setArmed(false); setDone(true); }
  };
  return <button type="button" className={c.double} data-s={done ? 'done' : armed ? 'armed' : 'idle'} onClick={click}>{done ? 'Deleted · undo' : armed ? 'Sure? Press again' : 'Delete'}</button>;
}
