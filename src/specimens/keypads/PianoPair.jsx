import { useState } from 'react';
import c from './keypads.module.css';

/* 3 */ export function PianoPair() {
  const [k, setK] = useState('');
  return (
    <div className={c.piano} data-k={k}>
      {['C', 'D', 'E'].map((n) => <button type="button" key={n} aria-label={`White key ${n}`} onPointerDown={() => setK(n)} onPointerUp={() => setK('')} onKeyDown={() => setK(n)} onKeyUp={() => setK('')}>{n}</button>)}
      <b data-b="1" /><b data-b="2" />
    </div>
  );
}
