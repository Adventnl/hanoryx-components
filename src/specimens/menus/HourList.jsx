import { useState } from 'react';
import { clamp } from '../../stage/hooks';
import c from './menus.module.css';

/* 35 */ export function HourList() {
  const [k, setK] = useState(9);
  return (
    <div className={c.hours} role="listbox" aria-label="Hour menu" tabIndex={0} aria-activedescendant={`h-${k}`} onKeyDown={(e) => { if (e.key === 'ArrowDown') { e.preventDefault(); setK((v) => clamp(v + 1, 6, 18)); } if (e.key === 'ArrowUp') { e.preventDefault(); setK((v) => clamp(v - 1, 6, 18)); } }}>
      {Array.from({ length: 13 }, (_, i) => i + 6).map((h) => <span key={h} id={`h-${h}`} role="option" aria-selected={h === k} onClick={() => setK(h)}>{String(h).padStart(2, '0')}:00</span>)}
    </div>
  );
}
