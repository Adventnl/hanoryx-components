import { useState } from 'react';
import { pad2 } from '../../stage/hooks';
import c from './passes.module.css';

/* 42 */
const SLOTS = [['09:00', 540, 4], ['09:30', 570, 0], ['10:00', 600, 2], ['10:30', 630, 6], ['11:00', 660, 1], ['11:30', 690, 3]];

export function EntrySlot() {
  const [k, setK] = useState(2);
  const [label, mins] = SLOTS[k];
  const end = mins + 30;
  return (
    <div className={c.es}>
      <span className={c.esTop}>
        <span className={c.esClock} aria-hidden="true" style={{ '--hr': `${((mins / 60) % 12) * 30}deg`, '--mn': `${(mins % 60) * 6}deg` }}><i /><i /><b /></span>
        <span className={c.esTime}>
          <span className={c.kp}>Enter between</span>
          <b>{label} – {pad2(Math.floor(end / 60))}:{pad2(end % 60)}</b>
        </span>
      </span>
      <span className={c.esSlots} role="group" aria-label="Entry time">
        {SLOTS.map(([t, , left], i) => (
          <button key={t} type="button" aria-pressed={k === i} disabled={left === 0} onClick={() => setK(i)}><b>{t}</b><span>{left ? `${left} left` : 'Full'}</span></button>
        ))}
      </span>
    </div>
  );
}
