import { useState } from 'react';
import c from './menus.module.css';

/* 8 */ export function WedgeMenu() {
  const [k, setK] = useState(-1);
  const names = ['Up', 'Right', 'Down', 'Left'];
  return (
    <div className={c.pie} role="menu" aria-label="Pie menu">
      {names.map((n, i) => <button key={n} type="button" role="menuitem" data-on={k === i} style={{ '--a': i * 90 }} onPointerEnter={() => setK(i)} onPointerLeave={() => setK(-1)} onFocus={() => setK(i)} onBlur={() => setK(-1)}><span>{n}</span></button>)}
      <i aria-hidden="true" />
    </div>
  );
}
