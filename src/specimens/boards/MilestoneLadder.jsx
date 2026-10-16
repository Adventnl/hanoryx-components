import { useState } from 'react';
import c from './boards.module.css';
import { Bd } from './shared';

/* 37 */ export function MilestoneLadder() {
  const [s, setS] = useState(1);
  const M = ['Kickoff', 'Alpha', 'Beta', 'Launch'];
  return (
    <Bd label="Milestones" className={c.ladder}>
      {M.map((m, k) => <button key={m} type="button" data-done={k <= s} aria-pressed={k <= s} onClick={() => setS(k === s ? k - 1 : k)}><i />{m}</button>)}
    </Bd>
  );
}
