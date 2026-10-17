import { useState } from 'react';
import c from "../archive.module.css";

const SPINES = [['Atlas', '#8a3b2b', 6.2], ['Ledger', '#2b4a8a', 5.4], ['Annals', '#2f6b4a', 6.6], ['Index', '#6b4a2f', 5.8], ['Codex', '#7a2f6b', 6.4], ['Rolls', '#3b3b44', 5.2], ['Notes', '#8a6b2b', 5.9]];

/* 15 */ export function BookSpines() {
  const [s, setS] = useState(2);
  return (
    <div className={c.shelf}>
      <div role="group" aria-label="Book spines">
        {SPINES.map(([t, col, h], i) => <button key={t} type="button" aria-pressed={s === i} aria-label={t} onClick={() => setS(i)} style={{ '--col': col, '--h': `${h}rem` }}><span>{t}</span></button>)}
      </div>
      <small>{SPINES[s][0]}</small>
    </div>
  );
}
