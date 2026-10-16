import { useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './docks.module.css';

/* 26 */ export function FilterBar() {
  const [on, setOn] = useState(['New']);
  const flip = (t) => setOn((o) => (o.includes(t) ? o.filter((x) => x !== t) : [...o, t]));
  return (
    <div className={c.filter} role="group" aria-label="Filter bar">
      {['New', 'Hot', 'Saved', 'Mine'].map((t) => <button key={t} type="button" aria-pressed={on.includes(t)} onClick={() => flip(t)}>{on.includes(t) && <Ico n="check" />}{t}</button>)}
    </div>
  );
}
