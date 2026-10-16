import { useState } from 'react';
import c from './archive.module.css';

/* 33 */ export function PocketCard() {
  const [up, setUp] = useState(false);
  return (
    <button type="button" className={c.pocketBtn} aria-pressed={up} onClick={() => setUp((v) => !v)} aria-label="Library pocket. Click to pull the card up">
      <span className={c.slipCard} data-up={up}><i /><i /><i /></span>
      <span className={c.pkt}><b>BORROWER</b></span>
    </button>
  );
}
