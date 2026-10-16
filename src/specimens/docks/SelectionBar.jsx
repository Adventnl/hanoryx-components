import { useState } from 'react';
import { Ico } from '../../stage/icons';
import c from './docks.module.css';

/* 36 */ export function SelectionBar() {
  const [sel, setSel] = useState([0, 2]);
  const flip = (k) => setSel((s) => (s.includes(k) ? s.filter((x) => x !== k) : [...s, k]));
  return (
    <div className={c.select}>
      <ul>{['Notes.md', 'Plan.pdf', 'Cover.png'].map((t, k) => <li key={t}><label><input type="checkbox" checked={sel.includes(k)} onChange={() => flip(k)} />{t}</label></li>)}</ul>
      <div role="toolbar" aria-label="Selection bar" data-show={sel.length > 0}><b>{sel.length} selected</b><button type="button" aria-label="Delete selected" onClick={() => setSel([])}><Ico n="trash" /></button><button type="button" aria-label="Clear selection" onClick={() => setSel([])}><Ico n="close" /></button></div>
    </div>
  );
}
