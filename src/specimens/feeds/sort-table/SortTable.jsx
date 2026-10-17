import { useState } from 'react';
import c from "../feeds.module.css";
import { Fd, cx } from "../shared";

/* 08 */ export function SortTable() {
  const [by, setBy] = useState(1);
  const R = [['Ana', 42, 'Oct 2'], ['Kofi', 17, 'Oct 9'], ['Mara', 88, 'Sep 28'], ['Ravi', 31, 'Oct 12']];
  const rows = [...R].sort((a, b) => (typeof a[by] === 'number' ? b[by] - a[by] : String(a[by]).localeCompare(String(b[by]))));
  return (
    <Fd label="Sortable table" className={c.list}>
      <div className={cx(c.tr, c.th)}>{['Name', 'Score', 'Seen'].map((h, k) => <button key={h} type="button" aria-pressed={by === k} onClick={() => setBy(k)}>{h}{by === k ? ' ↓' : ''}</button>)}</div>
      {rows.map(([a, b, d]) => <div key={a} className={c.tr}><span>{a}</span><span>{b}</span><span>{d}</span></div>)}
    </Fd>
  );
}
