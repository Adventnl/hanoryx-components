import { useState } from 'react';
import c from "../figures.module.css";

/* 12 */ export function TallyMarks() {
  const [n, setN] = useState(13);
  const groups = Math.floor(n / 5);
  const rest = n % 5;
  const stroke = (k, x) => <line key={k} x1={x} y1="4" x2={x} y2="36" />;
  return (
    <button type="button" className={c.tally} aria-label={`Tally of ${n}. Click to add a mark`} onClick={() => setN((v) => (v + 1) % 31)}>
      <span>
        {Array.from({ length: groups }, (_, g) => (
          <svg key={g} viewBox="0 0 44 40" aria-hidden="true">{[6, 15, 24, 33].map((x, k) => stroke(k, x))}<line className={c.slash} x1="1" y1="30" x2="43" y2="10" /></svg>
        ))}
        {rest > 0 && <svg viewBox="0 0 44 40" aria-hidden="true">{[6, 15, 24, 33].slice(0, rest).map((x, k) => stroke(k, x))}</svg>}
      </span>
      <em>{n}</em>
    </button>
  );
}
