import { useState } from 'react';
import { useCell } from '../../stage/chartKit';
import c from './matrices.module.css';

/* 33 */ const mixHex = (col, row) => {
  const t = col / 7;
  const k = 1 - row * 0.17;
  const rgb = [255, 255 - 204 * t, 255 - 204 * t].map((v) => Math.round(v * k));
  return `#${rgb.map((v) => v.toString(16).padStart(2, '0')).join('').toUpperCase()}`;
};

export function SwatchMatrix() {
  const [sel, setSel] = useState([1, 5]);
  const [at, bind] = useCell(5, 8, (r, k) => setSel([r, k]));
  const hex = mixHex(sel[1], sel[0]);
  return (
    <div className={c.box}>
      <div className={c.swatches} {...bind} aria-label="Swatch matrix, click a colour">
        {Array.from({ length: 40 }, (_, i) => <i key={i} style={{ background: mixHex(i % 8, Math.floor(i / 8)) }} data-sel={Math.floor(i / 8) === sel[0] && i % 8 === sel[1]} data-at={i === at[0] * 8 + at[1]} />)}
      </div>
      <output className={c.out}><u style={{ background: hex }} /> <b>{hex}</b></output>
    </div>
  );
}
