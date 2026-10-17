import { useState } from 'react';
import c from "../archive.module.css";

/* 26 */ export function LedgerPage() {
  const [on, setOn] = useState([1, 3]);
  const rows = [['Rent', 1200], ['Paper', 86], ['Power', 240], ['Post', 33], ['Ink', 118]];
  const flip = (i) => setOn((a) => (a.includes(i) ? a.filter((x) => x !== i) : [...a, i]));
  const total = rows.reduce((s, [, v], i) => s + (on.includes(i) ? v : 0), 0);
  return (
    <div className={c.ledger}>
      {rows.map(([t, v], i) => <button key={t} type="button" role="checkbox" aria-checked={on.includes(i)} onClick={() => flip(i)}><u data-on={on.includes(i)}>✓</u><span>{t}</span><b>{v}</b></button>)}
      <p><span>checked</span><b>{total}</b></p>
    </div>
  );
}
