import { useState } from 'react';
import c from './sheets.module.css';
import { Stage } from './shared';

/* 28 */ export function LayeredDeck() {
  const [top, setTop] = useState(0);
  return (
    <Stage label="Layered deck">
      <div className={c.deck}>{[0, 1, 2, 3].map((k) => <section key={k} style={{ '--p': (k - top + 4) % 4 }} aria-hidden={(k - top + 4) % 4 !== 0}><b>0{k + 1}</b></section>)}</div>
      <button type="button" className={c.open} onClick={() => setTop((top + 1) % 4)}>Shuffle</button>
    </Stage>
  );
}
