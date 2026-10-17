import { useState } from 'react';
import c from "../figures.module.css";

/* 6 */ const SEGS = { 0: 'abcdef', 1: 'bc', 2: 'abdeg', 3: 'abcdg', 4: 'bcfg', 5: 'acdfg', 6: 'acdefg', 7: 'abc', 8: 'abcdefg', 9: 'abcdfg' };

const SEG_POLY = { a: '10,4 50,4 44,10 16,10', b: '52,6 52,46 46,40 46,12', c: '52,54 52,94 46,88 46,60', d: '10,96 50,96 44,90 16,90', e: '8,54 8,94 14,88 14,60', f: '8,6 8,46 14,40 14,12', g: '12,50 18,45 42,45 48,50 42,55 18,55' };

function Digit7({ v }) {
  return (
    <svg viewBox="0 0 60 100" aria-hidden="true">
      {Object.entries(SEG_POLY).map(([k, p]) => <polygon key={k} points={p} data-on={SEGS[v].includes(k)} />)}
    </svg>
  );
}

export function SevenSegment() {
  const [n, setN] = useState(247);
  return (
    <div className={c.fig}>
      <div className={c.sevens} role="img" aria-label={`Seven-segment display showing ${n}`}>
        {[...String(n).padStart(3, '0')].map((d, i) => <Digit7 key={i} v={d} />)}
      </div>
      <div className={c.pair}>
        <button type="button" aria-label="Count down" onClick={() => setN((v) => (v + 999) % 1000)}>−</button>
        <button type="button" aria-label="Count up" onClick={() => setN((v) => (v + 1) % 1000)}>+</button>
      </div>
    </div>
  );
}
