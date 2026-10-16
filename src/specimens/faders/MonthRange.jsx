import { useState } from 'react';
import c from './faders.module.css';

const MONTHS = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];

/* 24 */ export function MonthRange() {
  const [r, setR] = useState([2, 5]);
  const [anchor, setAnchor] = useState(null);
  const at = (i) => { if (anchor === null) { setAnchor(i); setR([i, i]); } else { setR([Math.min(anchor, i), Math.max(anchor, i)]); setAnchor(null); } };
  return (
    <div className={c.months} role="group" aria-label="Month range, choose two months">
      {MONTHS.map((m, i) => <button type="button" key={i} aria-label={`Month ${i + 1}`} aria-pressed={i >= r[0] && i <= r[1]} data-edge={i === r[0] || i === r[1]} onClick={() => at(i)}>{m}</button>)}
    </div>
  );
}
