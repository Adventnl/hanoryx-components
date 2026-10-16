import { useState } from 'react';
import c from './tickers.module.css';
import { Cell } from './shared';

/* ---------- 01 flaps and boards ---------- */

const WORDS = ['ARRIVE', 'DEPART', 'GATE 7', 'LANDED', 'ON AIR', 'CLEAR '];

export function FlapWord() {
  const [s, setS] = useState({ prev: 0, cur: 0, k: 0 });
  const word = WORDS[s.cur];
  const was = WORDS[s.prev];
  return (
    <button
      type="button"
      className={`${c.fig} ${c.reset}`}
      aria-label={`Flip the board, now showing ${word.trim().toLowerCase()}`}
      onClick={() => setS((v) => ({ prev: v.cur, cur: (v.cur + 1) % WORDS.length, k: v.k + 1 }))}
    >
      <span className={c.row} style={{ '--fs': '14cqw' }}>
        {[...word].map((ch, i) => <Cell key={`${s.k}-${i}`} cur={ch} prev={was[i]} i={i} />)}
      </span>
    </button>
  );
}
