import { useState } from 'react';
import c from "../terminal.module.css";
import { cx } from "../shared";

const PS = [[1, 'root', 0.4, 12], [212, 'ada', 31.2, 8], [388, 'ada', 4.8, 21], [402, 'sys', 0.1, 3], [517, 'www', 12.7, 16], [630, 'ada', 0.0, 1]];

/* 11 */ export function ProcessTable() {
  const [by, setBy] = useState(2);
  const rows = [...PS].sort((a, b) => (by === 1 ? a[1].localeCompare(b[1]) : b[by] - a[by]));
  return (
    <div className={c.win}>
      <div className={cx(c.ln, c.head)}>
        {['PID', 'USER', 'CPU', 'MEM'].map((h, i) => <button key={h} type="button" className={c.th} aria-pressed={by === i} onClick={() => setBy(i)}>{h}{by === i ? '↓' : ''}</button>)}
      </div>
      {rows.map((r) => <div key={r[0]} className={cx(c.ln, c.row4)}>{r.map((v, i) => <span key={i}>{typeof v === 'number' && i > 1 ? v.toFixed(1) : v}</span>)}</div>)}
    </div>
  );
}
