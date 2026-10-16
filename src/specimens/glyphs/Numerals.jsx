import { useState } from 'react';
import c from './glyphs.module.css';

const NUMS = [['lining tabular', 'lining-nums tabular-nums'], ['old-style', 'oldstyle-nums proportional-nums'], ['slashed zero', 'lining-nums slashed-zero'], ['fractions', 'diagonal-fractions']];

export function Numerals() {
  const [k, setK] = useState(1);
  return (
    <button type="button" className={`${c.fig} ${c.reset}`} aria-label={`Numeral style ${NUMS[k][0]}. Try the next`} onClick={() => setK((x) => (x + 1) % NUMS.length)}>
      <span className={c.nums} style={{ fontVariantNumeric: NUMS[k][1] }}>0123456789<br />1/2  3/4  5/8</span>
      <span className={c.note}>{NUMS[k][0]}</span>
    </button>
  );
}
