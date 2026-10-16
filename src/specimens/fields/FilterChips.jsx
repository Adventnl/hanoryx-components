import { useState } from 'react';
import c from './fields.module.css';

/* 31 */ export function FilterChips() {
  const [on, setOn] = useState(['New']);
  return (
    <div className={c.chips} role="group" aria-label="Filters">
      {['New', 'Open', 'Mine', 'Starred', 'Archived'].map((x) => <button type="button" key={x} aria-pressed={on.includes(x)} onClick={() => setOn(on.includes(x) ? on.filter((y) => y !== x) : [...on, x])}>{on.includes(x) && '✓ '}{x}</button>)}
    </div>
  );
}
