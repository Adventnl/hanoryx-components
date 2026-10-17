import { useState } from 'react';
import { clamp } from "../../../stage/hooks";
import c from "../figures.module.css";

/* 10 */ const ROMAN = [[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']];

const toRoman = (num) => {
  let left = num;
  let out = '';
  ROMAN.forEach(([v, r]) => { while (left >= v) { out += r; left -= v; } });
  return out;
};

export function RomanNumerals() {
  const [n, setN] = useState(2026);
  const step = (d) => setN((v) => clamp(v + d, 1, 3999));
  return (
    <div className={c.fig}>
      <output className={c.roman}>{toRoman(n)}</output>
      <p className={c.sub}>{n}</p>
      <div className={c.pair}>
        <button type="button" aria-label="Down ten" onClick={() => step(-10)}>−10</button>
        <button type="button" aria-label="Down one" onClick={() => step(-1)}>−1</button>
        <button type="button" aria-label="Up one" onClick={() => step(1)}>+1</button>
        <button type="button" aria-label="Up ten" onClick={() => step(10)}>+10</button>
      </div>
    </div>
  );
}
