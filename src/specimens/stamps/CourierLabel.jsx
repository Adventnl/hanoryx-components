import { useState } from 'react';
import c from './stamps.module.css';

const SERVICE = [['STANDARD', '#6b7280'], ['EXPRESS', '#f59e0b'], ['OVERNIGHT', '#ef4444']];

/* 21 */ export function CourierLabel() {
  const [s, setS] = useState(1);
  return (
    <button type="button" className={c.parcel} onClick={() => setS((v) => (v + 1) % 3)} aria-label={`Shipping label, ${SERVICE[s][0]}. Click to change service`}>
      <span className={c.svc} style={{ background: SERVICE[s][1] }}>{SERVICE[s][0]}</span>
      <i /><i /><i />
      <small>THIS SIDE UP ↑ · FRAGILE</small>
    </button>
  );
}
