import { useEffect, useState } from 'react';
import { useCell } from '../../stage/chartKit';
import c from './matrices.module.css';

/* 35 */ const DECK = [0, 3, 1, 5, 2, 4, 3, 0, 5, 1, 4, 2];

const GLYPHS = ['●', '■', '▲', '◆', '★', '✚'];

export function MemoryFlip() {
  const [open, setOpen] = useState([]);
  const [done, setDone] = useState([]);
  useEffect(() => {
    if (open.length < 2) return undefined;
    const match = DECK[open[0]] === DECK[open[1]];
    const id = window.setTimeout(() => { if (match) setDone((d) => [...d, ...open]); setOpen([]); }, match ? 350 : 850);
    return () => window.clearTimeout(id);
  }, [open]);
  const won = done.length === 12;
  const [at, bind] = useCell(3, 4, (r, k) => {
    const i = r * 4 + k;
    if (won) { setDone([]); setOpen([]); return; }
    if (open.length < 2 && !open.includes(i) && !done.includes(i)) setOpen((o) => [...o, i]);
  });
  return (
    <div className={c.box}>
      <div className={c.memory} {...bind} aria-label="Memory game, click cards to find the pairs">
        {DECK.map((g, i) => <i key={i} data-up={open.includes(i) || done.includes(i)} data-done={done.includes(i)} data-at={i === at[0] * 4 + at[1]}><b>{GLYPHS[g]}</b></i>)}
      </div>
      <output className={c.out}>{won ? <b>All paired · click to shuffle</b> : <><b>{done.length / 2}</b> of 6 pairs</>}</output>
    </div>
  );
}
