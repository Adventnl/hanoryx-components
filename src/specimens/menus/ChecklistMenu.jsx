import { useState } from 'react';
import c from './menus.module.css';

/* 16 */ export function ChecklistMenu() {
  const [on, setOn] = useState(['Bold']);
  const flip = (t) => setOn((o) => (o.includes(t) ? o.filter((x) => x !== t) : [...o, t]));
  return (
    <div className={c.checks} role="group" aria-label="Checklist menu">
      {['Bold', 'Italic', 'Strike', 'Code'].map((t) => <label key={t}><input type="checkbox" checked={on.includes(t)} onChange={() => flip(t)} />{t}</label>)}
    </div>
  );
}
