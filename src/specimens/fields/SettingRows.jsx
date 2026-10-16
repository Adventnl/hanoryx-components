import { useState } from 'react';
import c from './fields.module.css';

/* 23 */ export function SettingRows() {
  const [s, setS] = useState([true, false, true]);
  return (
    <ul className={c.rows}>
      {['Sounds', 'Reminders', 'Previews'].map((t, i) => (
        <li key={t}><span>{t}</span><button type="button" role="switch" aria-checked={s[i]} aria-label={t} onClick={() => setS(s.map((x, j) => (j === i ? !x : x)))}><i /></button></li>
      ))}
    </ul>
  );
}
