import { useState } from 'react';
import c from "../boards.module.css";
import { Bd } from "../shared";

/* 30 */ export function UrgencyQuadrants() {
  const [q, setQ] = useState(1);
  const N = ['Do later', 'Do now', 'Drop', 'Hand off'];
  return (
    <Bd label="Priority matrix" className={c.matrix}>
      {N.map((t, k) => <button key={t} type="button" aria-pressed={q === k} aria-label={`${t}: place the task here`} onClick={() => setQ(k)}><small>{t}</small>{q === k ? <i /> : null}</button>)}
    </Bd>
  );
}
