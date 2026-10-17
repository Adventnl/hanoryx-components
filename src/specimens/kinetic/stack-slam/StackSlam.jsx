import { useState } from 'react';
import c from "../kinetic.module.css";

/* 19 */ export function StackSlam() {
  const [n, setN] = useState(0);
  return (
    <div className={c.fig}>
      <button type="button" className={c.slam} aria-label="Stack slam. Click to slam the words in again" onClick={() => setN(n + 1)}>
        {['STACK', 'THE', 'TYPE'].map((w, i) => <b key={`${n}-${w}`} style={{ '--i': i }}>{w}</b>)}
      </button>
    </div>
  );
}
