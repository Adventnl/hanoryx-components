import { useState } from 'react';
import c from './tickers.module.css';
import { Cell } from './shared';

const COLS = 8;

const SIZE = COLS * 2;

const clean = (s) => s.toUpperCase().replace(/[^A-Z0-9 .!?-]/g, '').slice(0, SIZE);

/** two rows of eight: break at the last space that fits, otherwise at the edge */
const lay = (s) => {
  if (s.length <= COLS) return s.padEnd(COLS) + ''.padEnd(COLS);
  let cut = s.lastIndexOf(' ', COLS);
  if (cut < 1) cut = COLS;
  return s.slice(0, cut).padEnd(COLS) + s.slice(cut).trimStart().slice(0, COLS).padEnd(COLS);
};

export function Letterboard() {
  const [text, setText] = useState('HELLO THERE');
  const [cells, setCells] = useState(() => [...lay('HELLO THERE')].map((ch) => ({ cur: ch, prev: ch, k: 0 })));
  const onChange = (e) => {
    const v = clean(e.target.value);
    const next = lay(v);
    setText(v);
    setCells((cs) => cs.map((x, i) => (next[i] === x.cur ? x : { cur: next[i], prev: x.cur, k: x.k + 1 })));
  };
  return (
    <div className={c.fig}>
      <div className={c.letters} style={{ '--fs': '8.6cqw' }} role="img" aria-label={`Letterboard reading ${text.trim() || 'nothing'}`}>
        {cells.map((x, i) => <Cell key={`${i}-${x.k}`} cur={x.cur} prev={x.prev} i={0} />)}
      </div>
      <input className={c.input} value={text} maxLength={SIZE} onChange={onChange} aria-label="Message for the letterboard" spellCheck="false" autoComplete="off" />
    </div>
  );
}
