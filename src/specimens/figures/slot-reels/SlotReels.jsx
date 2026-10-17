import { useState } from 'react';
import c from "../figures.module.css";

/* 8 */ const SLOT_RESULTS = [[7, 7, 7], [3, 5, 1], [9, 2, 4], [6, 6, 2], [1, 1, 1], [8, 0, 5]];

export function SlotReels() {
  const [spin, setSpin] = useState(0);
  const prev = SLOT_RESULTS[Math.max(0, spin - 1) % 6];
  const cur = SLOT_RESULTS[spin % 6];
  return (
    <button type="button" className={c.slotBtn} aria-label={`Slot reels showing ${cur.join(' ')}. Click to spin`} onClick={() => setSpin(spin + 1)}>
      {cur.map((d, r) => (
        <span key={r}>
          <b key={spin} className={spin ? c.reelSpin : undefined} style={{ '--from': spin ? prev[r] : d, '--to': 30 + d, animationDuration: `${1.4 + r * 0.5}s` }}>
            {Array.from({ length: 41 }, (_, i) => <i key={i}>{i % 10}</i>)}
          </b>
        </span>
      ))}
    </button>
  );
}
