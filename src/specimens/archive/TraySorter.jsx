import { useState } from 'react';
import c from './archive.module.css';

const TRAYS = ['IN', 'WORK', 'OUT'];

/* 25 */ export function TraySorter() {
  const [at, setAt] = useState([2, 1, 0]);
  const move = (i) => setAt((a) => a.map((v, k) => (k === i ? (v + 1) % 3 : v)));
  return (
    <div className={c.trays}>
      {TRAYS.map((t, col) => (
        <div key={t}>
          <span>{t}</span>
          {at.map((v, k) => v === col && <button key={k} type="button" className={c.sheetBtn} aria-label={`Move paper ${k + 1} on from ${t}`} onClick={() => move(k)} style={{ '--h': k * 90 }} />)}
        </div>
      ))}
    </div>
  );
}
