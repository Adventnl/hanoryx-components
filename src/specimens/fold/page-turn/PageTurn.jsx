import { useState } from 'react';
import c from "../fold.module.css";

export function PageTurn() {
  const [n, setN] = useState(0);
  const m = n % 5;
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-label={`A book; turn a page. ${m} turned`} onClick={() => setN((v) => v + 1)}>
      <span className={c.stage}>
        <span className={c.book}>
          {[0, 1, 2, 3].map((k) => <i key={k} data-out={k < m} style={{ '--k': k }}><b>{k * 2 + 1}</b><u>{k * 2 + 2}</u></i>)}
        </span>
      </span>
    </button>
  );
}
