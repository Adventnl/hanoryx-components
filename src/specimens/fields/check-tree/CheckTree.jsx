import { useState } from 'react';
import c from "../fields.module.css";

/* 22 */ export function CheckTree() {
  const [kids, setKids] = useState([true, false, true]);
  const all = kids.every(Boolean);
  const some = kids.some(Boolean);
  return (
    <div className={c.tree}>
      <label><input type="checkbox" checked={all} ref={(el) => { if (el) el.indeterminate = some && !all; }} onChange={() => setKids(kids.map(() => !all))} /><b>Permissions</b></label>
      {['Read', 'Write', 'Share'].map((t, i) => <label key={t}><input type="checkbox" checked={kids[i]} onChange={() => setKids(kids.map((x, j) => (j === i ? !x : x)))} />{t}</label>)}
    </div>
  );
}
