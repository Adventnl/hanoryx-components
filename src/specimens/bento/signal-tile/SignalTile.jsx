import { useState } from 'react';
import c from "../bento.module.css";
import { Tile } from "../shared";

export function SignalTile() {
  const [n, setN] = useState(3);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-label={`Signal ${n} of 4 bars; change`} onClick={() => setN((v) => (v % 4) + 1)}>
      <Tile k="Signal">
        <span className={c.bars4}>{[1, 2, 3, 4].map((k) => <i key={k} data-on={k <= n} style={{ '--k': k }} />)}</span>
        <b className={c.v}>{['Weak', 'Fair', 'Good', 'Strong'][n - 1]}</b>
      </Tile>
    </button>
  );
}
