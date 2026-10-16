import { useState } from 'react';
import c from './fold.module.css';

export function FlipDeck() {
  const [n, setN] = useState(0);
  const m = n % 5;
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-label={`A deck; turn the top card face up. ${m} of 4 turned`} onClick={() => setN((v) => v + 1)}>
      <span className={`${c.stage} ${c.deck}`}>
        {[0, 1, 2, 3].map((k) => <i key={k} data-out={k < m} style={{ '--k': k }}><b>{k + 1}</b></i>)}
      </span>
    </button>
  );
}
