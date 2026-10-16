import { useState } from 'react';
import c from './tilt.module.css';

const DECK = ['A', 'B', 'C', 'D'];

export function StackShuffle() {
  const [order, setOrder] = useState(DECK);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-label="A deck of four cards; send the top one to the back" onClick={() => setOrder((o) => [...o.slice(1), o[0]])}>
      <span className={c.deck}>
        {DECK.map((k) => <i key={k} style={{ '--r': order.indexOf(k) }}>{k}</i>)}
      </span>
    </button>
  );
}
