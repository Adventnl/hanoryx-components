import { useState } from 'react';
import c from './fields.module.css';

/* 20 */ export function MultiSelect() {
  const all = ['Email', 'Push', 'SMS', 'Digest'];
  const [on, setOn] = useState(['Email']);
  return (
    <div className={c.multi} role="group" aria-label="Channels">
      {all.map((x) => <button type="button" key={x} aria-pressed={on.includes(x)} onClick={() => setOn(on.includes(x) ? on.filter((y) => y !== x) : [...on, x])}>{x}</button>)}
      <output>{on.length} SELECTED</output>
    </div>
  );
}
