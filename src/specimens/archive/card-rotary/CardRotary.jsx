import { useState } from 'react';
import c from "../archive.module.css";
import { CARDS } from "../shared";

/* 09 */ export function CardRotary() {
  const [n, setN] = useState(0);
  return (
    <button type="button" className={c.rot} onClick={() => setN((v) => v + 1)} aria-label="Card rotary. Click to turn it">
      <span className={c.cyl} style={{ transform: `rotateX(${n * 45}deg)` }}>
        {Array.from({ length: 8 }, (_, k) => <i key={k} style={{ transform: `rotateX(${-k * 45}deg) translateZ(2.6rem)` }}><b>{CARDS[k]}</b></i>)}
      </span>
    </button>
  );
}
