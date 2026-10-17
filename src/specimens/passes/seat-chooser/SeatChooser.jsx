import { useState } from 'react';
import { rng } from "../../../stage/hooks";
import c from "../passes.module.css";

/* 13 */
const SEAT_ROWS = 5;

const SEAT_TAKEN = (() => { const r = rng(88); return new Set(Array.from({ length: 9 }, () => `${1 + Math.floor(r() * SEAT_ROWS)}${'ABCDEF'[Math.floor(r() * 6)]}`)); })();

export function SeatChooser() {
  const [sel, setSel] = useState('3C');
  return (
    <div className={c.fig}>
      <div className={c.sc} role="group" aria-label="Seat map">
        {Array.from({ length: SEAT_ROWS }, (_, r) => (
          <span key={r} className={c.scRow}>
            <em>{r + 1}</em>
            {'ABCDEF'.split('').map((l, k) => {
              const id = `${r + 1}${l}`;
              return (
                <button key={id} type="button" className={c.scSeat} data-gap={k === 3} aria-pressed={sel === id} aria-label={`Seat ${id}`} disabled={SEAT_TAKEN.has(id)} onClick={() => setSel(id)} />
              );
            })}
          </span>
        ))}
      </div>
      <p className={c.row}><span className={c.k}>Seat</span><b className={c.scOut}>{sel}</b></p>
    </div>
  );
}
