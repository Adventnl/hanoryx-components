import { useState } from 'react';
import c from './menus.module.css';

/* 17 */ export function RadioMenu() {
  const [v, setV] = useState('Sort by date');
  return (
    <div className={c.radios} role="radiogroup" aria-label="Sort menu">
      {['Sort by date', 'Sort by name', 'Sort by size'].map((t) => <button key={t} type="button" role="radio" aria-checked={t === v} onClick={() => setV(t)}><i />{t}</button>)}
    </div>
  );
}
