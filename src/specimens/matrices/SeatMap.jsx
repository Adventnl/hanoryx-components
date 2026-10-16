import { useState } from 'react';
import { rng } from '../../stage/hooks';
import { useCell } from '../../stage/chartKit';
import c from './matrices.module.css';

/* 11 */ const SEATS = (() => {
  const r = rng(7);
  return Array.from({ length: 54 }, () => r() < 0.28);
})();

const FREE_SEATS = SEATS.map((t, i) => (t ? -1 : i)).filter((i) => i >= 0);

export function SeatMap() {
  const [mine, setMine] = useState(FREE_SEATS.slice(9, 11));
  const [at, bind] = useCell(6, 9, (r, k) => {
    const i = r * 9 + k;
    if (!SEATS[i]) setMine((m) => (m.includes(i) ? m.filter((x) => x !== i) : [...m, i]));
  });
  return (
    <div className={c.box}>
      <div className={c.seats} {...bind} aria-label="Seat map, click free seats to pick them">
        {SEATS.map((taken, i) => <i key={i} data-taken={taken} data-mine={mine.includes(i)} data-at={i === at[0] * 9 + at[1]} />)}
      </div>
      <output className={c.out}><b>{mine.length}</b> seats picked · screen is up here ↑</output>
    </div>
  );
}
