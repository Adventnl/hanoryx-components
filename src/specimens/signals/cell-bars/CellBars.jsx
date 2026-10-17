import { useState } from 'react';
import c from "../signals.module.css";

/* 10 */ export function CellBars() {
  const [n, setN] = useState(3);
  return <button type="button" className={c.cell} aria-label={`Signal ${n} of 4. Press to change`} onClick={() => setN((n % 4) + 1)}>{[1, 2, 3, 4].map((k) => <i key={k} data-on={k <= n} style={{ '--k': k }} />)}</button>;
}
