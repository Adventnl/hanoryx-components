import { useState } from 'react';
import { pad2 } from '../../stage/hooks';
import c from './archive.module.css';

/* 39 */ export function AisleMap() {
  const [s, setS] = useState(5);
  return (
    <div className={c.aisle} role="group" aria-label="Aisle map">
      {Array.from({ length: 12 }, (_, i) => <button key={i} type="button" aria-pressed={s === i} aria-label={`Bay ${i + 1}`} onClick={() => setS(i)} data-on={i % 4 === s % 4 || Math.floor(i / 4) === Math.floor(s / 4)} />)}
      <small>bay {pad2(s + 1)}</small>
    </div>
  );
}
