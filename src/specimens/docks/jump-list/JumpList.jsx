import { useState } from 'react';
import { clamp } from "../../../stage/hooks";
import c from "../docks.module.css";

/* 39 */ export function JumpList() {
  const items = ['Overview', 'Install', 'Usage', 'API', 'FAQ'];
  const [k, setK] = useState(1);
  return (
    <ul className={c.jump} role="listbox" aria-label="Jump list" tabIndex={0} aria-activedescendant={`jump-${k}`} onKeyDown={(e) => {
      if (e.key === 'ArrowDown') { e.preventDefault(); setK((v) => clamp(v + 1, 0, 4)); }
      if (e.key === 'ArrowUp') { e.preventDefault(); setK((v) => clamp(v - 1, 0, 4)); }
    }}>
      {items.map((t, i) => <li key={t} id={`jump-${i}`} role="option" aria-selected={i === k} onClick={() => setK(i)}>{t}</li>)}
    </ul>
  );
}
