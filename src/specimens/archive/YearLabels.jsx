import { useState } from 'react';
import c from './archive.module.css';

/* 28 */ export function YearLabels() {
  const [y, setY] = useState(2023);
  return (
    <div className={c.years}>
      <div role="group" aria-label="Years">{[2021, 2022, 2023, 2024, 2025].map((v) => <button key={v} type="button" aria-pressed={y === v} onClick={() => setY(v)}>{v}</button>)}</div>
      <small>{(y * 7) % 41 + 12} boxes in {y}</small>
    </div>
  );
}
