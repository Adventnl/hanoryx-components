import { useState } from 'react';
import c from './fields.module.css';

/* 16 */ export function InlineEdit() {
  const [edit, setEdit] = useState(false);
  const [v, setV] = useState('Untitled sketch');
  return edit
    ? <input className={c.inline} autoFocus value={v} aria-label="Title" onChange={(e) => setV(e.target.value)} onBlur={() => setEdit(false)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === 'Escape') setEdit(false); }} />
    : <button type="button" className={c.inlineBtn} onClick={() => setEdit(true)}>{v}<small>EDIT</small></button>;
}
