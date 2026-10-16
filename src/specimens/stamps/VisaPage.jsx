import { useState } from 'react';
import c from './stamps.module.css';
import { tilt } from './shared';

const PASS = [['LHR', 12, 18, '#d33'], ['NRT', 58, 10, '#27a'], ['JFK', 24, 52, '#2a6'], ['SYD', 66, 54, '#a52']];

/* 26 */ export function VisaPage() {
  const [extra, setExtra] = useState(0);
  const all = [...PASS, ...Array.from({ length: extra }, (_, k) => [['CPT', 'OSL', 'DXB', 'SIN'][k % 4], 12 + ((k * 31) % 60), 14 + ((k * 23) % 44), ['#d33', '#27a', '#2a6', '#a52'][k % 4]])];
  return (
    <button type="button" className={c.pass} onClick={() => setExtra((v) => (v + 1) % 5)} aria-label={`Passport page with ${all.length} stamps. Click to add one`}>
      {all.map(([t, x, y, col], i) => <b key={i} style={{ left: `${x}%`, top: `${y}%`, color: col, '--r': tilt(i + 1, 16) }}>{t}</b>)}
    </button>
  );
}
