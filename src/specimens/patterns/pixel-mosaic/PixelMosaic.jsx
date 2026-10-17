import { useState } from 'react';
import c from "../patterns.module.css";
import { cx } from "../shared";

const ART = '0110011001100110000110000111111000000000'.split('').map(Number);

/* 37 */ export function PixelMosaic() {
  const [on, setOn] = useState(() => ART.map(Boolean));
  const flip = (i) => setOn((a) => a.map((v, k) => (k === i ? !v : v)));
  return (
    <div className={cx(c.sw, c.pixels)} role="group" aria-label="Pixel grid">
      {on.map((v, i) => <button key={i} type="button" aria-pressed={v} aria-label={`Pixel ${i + 1}`} onClick={() => flip(i)} />)}
    </div>
  );
}
