import { useState } from 'react';
import { clamp } from "../../../stage/hooks";
import c from "../figures.module.css";

/* 22 */ export function Scoreboard() {
  const [s, setS] = useState([3, 2]);
  const add = (i, d) => setS((p) => p.map((v, j) => (j === i ? clamp(v + d, 0, 99) : v)));
  return (
    <div className={c.score}>
      {['A', 'B'].map((t, i) => (
        <p key={t}>
          <em>Side {t}</em>
          <b key={s[i]}>{s[i]}</b>
          <span>
            <button type="button" aria-label={`Side ${t} minus one`} onClick={() => add(i, -1)}>−</button>
            <button type="button" aria-label={`Side ${t} plus one`} onClick={() => add(i, 1)}>+</button>
          </span>
        </p>
      ))}
    </div>
  );
}
