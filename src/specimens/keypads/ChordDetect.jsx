import { useState } from 'react';
import c from './keypads.module.css';

/* 11 */ export function ChordDetect() {
  const [a, setA] = useState(false);
  const [b, setB] = useState(false);
  return (
    <div className={c.chord} data-both={a && b}>
      <button type="button" aria-label="Control key, hold" aria-pressed={a} onPointerDown={() => setA(true)} onPointerUp={() => setA(false)} onPointerLeave={() => setA(false)}>CTRL</button>
      <span>+</span>
      <button type="button" aria-label="K key, hold" aria-pressed={b} onPointerDown={() => setB(true)} onPointerUp={() => setB(false)} onPointerLeave={() => setB(false)}>K</button>
      <output>{a && b ? 'CHORD' : a || b ? 'ONE KEY' : 'IDLE'}</output>
    </div>
  );
}
