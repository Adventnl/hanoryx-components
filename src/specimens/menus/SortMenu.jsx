import { useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './menus.module.css';

/* 22 */ export function SortMenu() {
  const [col, setCol] = useState(0);
  const [dir, setDir] = useState(1);
  const cols = ['Name', 'Date', 'Size'];
  const click = (i) => { if (i === col) setDir(-dir); else { setCol(i); setDir(1); } };
  return (
    <div className={c.sort} role="group" aria-label="Sort menu">
      {cols.map((t, i) => <button key={t} type="button" aria-pressed={i === col} aria-label={`Sort by ${t}${i === col ? (dir > 0 ? ', ascending' : ', descending') : ''}`} onClick={() => click(i)}>{t}<Ico n={i === col ? (dir > 0 ? 'up' : 'down') : 'minus'} /></button>)}
    </div>
  );
}
