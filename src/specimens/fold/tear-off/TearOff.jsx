import { useState } from 'react';
import c from "../fold.module.css";

export function TearOff() {
  const [n, setN] = useState(0);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-label={`Calendar page ${14 + n}; tear it off`} onClick={() => setN((v) => v + 1)}>
      <span className={c.stage}>
        <span className={c.cal}>
          <i className={c.page}><b>{14 + n}</b></i>
          {n > 0 ? <i key={n} className={`${c.page} ${c.torn}`}><b>{13 + n}</b></i> : null}
          <u />
        </span>
      </span>
    </button>
  );
}
