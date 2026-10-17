import { useState } from 'react';
import c from "../fields.module.css";

/* 32 */ export function StarRating() {
  const [n, setN] = useState(3);
  const [hover, setHover] = useState(0);
  return (
    <div className={c.stars} role="radiogroup" aria-label="Rating" onMouseLeave={() => setHover(0)}>
      {[1, 2, 3, 4, 5].map((i) => <button type="button" key={i} role="radio" aria-checked={n === i} aria-label={`${i} of 5`} data-on={i <= (hover || n)} onMouseEnter={() => setHover(i)} onClick={() => setN(i)}>★</button>)}
    </div>
  );
}
