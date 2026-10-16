import { useState } from 'react';
import c from './bento.module.css';
import { Tile } from './shared';

export function StepsTile() {
  const [n, setN] = useState(2);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-label={`Step ${n} of 5; advance`} onClick={() => setN((v) => (v % 5) + 1)}>
      <Tile k={`Setup · ${n}/5`}>
        <span className={c.segs}>{[1, 2, 3, 4, 5].map((k) => <i key={k} data-on={k <= n} />)}</span>
        <b className={c.v}>{['Account', 'Team', 'Billing', 'Data', 'Launch'][n - 1]}</b>
      </Tile>
    </button>
  );
}
