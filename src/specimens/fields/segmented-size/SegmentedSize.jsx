import { useState } from 'react';
import c from "../fields.module.css";

/* 24 */ export function SegmentedSize() {
  const [k, setK] = useState(2);
  return <div className={c.seg} role="radiogroup" aria-label="Size">{['S', 'M', 'L', 'XL'].map((t, i) => <button type="button" key={t} role="radio" aria-checked={k === i} onClick={() => setK(i)}>{t}</button>)}</div>;
}
