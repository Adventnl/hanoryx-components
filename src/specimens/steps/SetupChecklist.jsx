import { useState } from 'react';
import c from './steps.module.css';

/* 17 */ export function SetupChecklist() {
  const [done, setDone] = useState([true, true, false, false]);
  const n = done.filter(Boolean).length;
  return (
    <div className={c.todo}>
      <ul>{['Sign in', 'Add a photo', 'Invite a friend', 'Take the tour'].map((t, k) => <li key={t}><label><input type="checkbox" checked={done[k]} onChange={() => setDone((d) => d.map((x, j) => (j === k ? !x : x)))} />{t}</label></li>)}</ul>
      <div role="progressbar" aria-label="Setup progress" aria-valuemin={0} aria-valuemax={4} aria-valuenow={n}><i style={{ '--v': n / 4 }} /></div>
    </div>
  );
}
