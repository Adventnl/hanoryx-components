import { useState } from 'react';
import c from './matrices.module.css';

/* 18 */ const KB = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];

export function KeyMap() {
  const [down, setDown] = useState([]);
  const [typed, setTyped] = useState('');
  const press = (k) => { setDown((d) => (d.includes(k) ? d : [...d, k])); setTyped((t) => (t + (k === ' ' ? '·' : k)).slice(-14)); };
  const release = (k) => setDown((d) => d.filter((x) => x !== k));
  const keyOf = (e) => (e.key === ' ' ? ' ' : /^[a-z]$/i.test(e.key) ? e.key.toUpperCase() : null);
  return (
    <div className={c.kb} role="application" aria-label="Key map, press letter keys to light them" tabIndex={0} onBlur={() => setDown([])}
      onKeyDown={(e) => { const k = keyOf(e); if (k) { e.preventDefault(); if (!e.repeat) press(k); } }}
      onKeyUp={(e) => { const k = keyOf(e); if (k) release(k); }}>
      {KB.map((row, r) => (
        <p key={row} style={{ '--r': r }}>
          {[...row].map((k) => <i key={k} data-down={down.includes(k)} onPointerDown={() => press(k)} onPointerUp={() => release(k)} onPointerLeave={() => release(k)}>{k}</i>)}
        </p>
      ))}
      <p><i className={c.space} data-down={down.includes(' ')} onPointerDown={() => press(' ')} onPointerUp={() => release(' ')} onPointerLeave={() => release(' ')}>space</i></p>
      <output>{typed || 'press some keys'}</output>
    </div>
  );
}
