import { useState } from 'react';
import c from "../figures.module.css";

/* 21 */ const DICE = [[0, 0], [0, -90], [-90, 0], [90, 0], [0, 90], [0, 180]];

const DICE_SEQ = [3, 5, 2, 6, 1, 4];

const PIPS = { 1: [4], 2: [0, 8], 3: [0, 4, 8], 4: [0, 2, 6, 8], 5: [0, 2, 4, 6, 8], 6: [0, 2, 3, 5, 6, 8] };

export function DiceRoll() {
  const [n, setN] = useState(0);
  const face = DICE_SEQ[n % 6];
  const [rx, ry] = DICE[face - 1];
  return (
    <button type="button" className={c.diceBtn} aria-label={`Dice showing ${face}. Click to roll`} onClick={() => setN(n + 1)}>
      <span className={c.cube} style={{ transform: `rotateX(${rx + n * 720}deg) rotateY(${ry + n * 360}deg)` }}>
        {[1, 2, 3, 4, 5, 6].map((f) => <i key={f} data-f={f}>{Array.from({ length: 9 }, (_, p) => <b key={p} data-on={PIPS[f].includes(p)} />)}</i>)}
      </span>
    </button>
  );
}
