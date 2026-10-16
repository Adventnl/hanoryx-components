import { useState } from 'react';
import c from './keypads.module.css';

/* 8 */ export function NumberPad() {
  const [s, setS] = useState('');
  return (
    <div className={c.pad}>
      <output>{s || '— — —'}</output>
      <div>{['1', '2', '3', '4', '5', '6', '7', '8', '9', '✕', '0', '↵'].map((k) => (
        <button type="button" key={k} aria-label={k === '✕' ? 'Clear' : k === '↵' ? 'Enter' : `Digit ${k}`} onClick={() => setS((v) => (k === '✕' || k === '↵' ? '' : (v + k).slice(-8)))}>{k}</button>
      ))}</div>
    </div>
  );
}
