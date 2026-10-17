import { useState } from 'react';
import { rng } from "../../../stage/hooks";
import c from "../stamps.module.css";

const FIN = [[0, 0], [6, 0], [0, 6]];

/* 20 */ export function MosaicCode() {
  const [seed, setSeed] = useState(3);
  const cell = (i) => {
    const x = i % 9;
    const y = Math.floor(i / 9);
    const f = FIN.find(([ox, oy]) => x >= ox && x < ox + 3 && y >= oy && y < oy + 3);
    if (f) return x === f[0] + 1 && y === f[1] + 1 ? 0 : 1;
    return rng(seed * 97 + i)() > 0.5 ? 1 : 0;
  };
  return (
    <button type="button" className={c.mosaic} onClick={() => setSeed((v) => v + 1)} aria-label="Code block. Click to draw another">
      {Array.from({ length: 81 }, (_, i) => <i key={i} data-on={cell(i)} />)}
    </button>
  );
}
