import { useState } from 'react';
import c from './bento.module.css';
import { Tile } from './shared';

const QUOTES = ['The belt keeps moving.', 'Nobody asked it to.', 'Somebody should.'];

export function QuoteTile() {
  const [k, setK] = useState(0);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-label="A quotation; show the next" onClick={() => setK((x) => (x + 1) % 3)}>
      <Tile k={`Quote ${k + 1}/3`}>
        <b key={k} className={`${c.q}`}>“{QUOTES[k]}”</b>
      </Tile>
    </button>
  );
}
