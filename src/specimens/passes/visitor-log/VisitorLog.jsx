import { useState } from 'react';
import { pad2 } from "../../../stage/hooks";
import c from "../passes.module.css";

/* 27 */
export function VisitorLog() {
  const [rows, setRows] = useState([[2, 'M. Okafor'], [1, 'T. Brandt']]);
  const [name, setName] = useState('');
  const next = rows[0][0] + 1;
  const stamp = (k) => { const m = 9 * 60 + k * 7; return `${pad2(Math.floor(m / 60))}:${pad2(m % 60)}`; };
  const add = (e) => {
    e.preventDefault();
    const t = name.trim();
    if (!t) return;
    setRows((r) => [[next, t], ...r].slice(0, 4));
    setName('');
  };
  return (
    <div className={c.fig}>
      <div className={c.vl}>
        <span className={c.vlHead}><span className={c.kp}>Visitors</span><span className={c.kp}>In</span></span>
        <ol>
          {rows.map(([k, n]) => <li key={k}><span>{n}</span><span>{stamp(k)}</span></li>)}
        </ol>
      </div>
      <form className={c.vlForm} onSubmit={add}>
        <input value={name} maxLength={18} onChange={(e) => setName(e.target.value)} placeholder="Sign in…" aria-label="Visitor name" spellCheck="false" autoComplete="off" />
        <button type="submit" className={c.btn}>Add</button>
      </form>
    </div>
  );
}
