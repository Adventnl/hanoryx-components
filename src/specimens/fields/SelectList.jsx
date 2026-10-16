import { useState } from 'react';
import { useToggle } from '../../stage/hooks';
import c from './fields.module.css';

/* 19 */ export function SelectList() {
  const [open, flip, set] = useToggle();
  const [k, setK] = useState(1);
  const opts = ['Draft', 'Review', 'Published'];
  return (
    <div className={c.select}>
      <button type="button" aria-haspopup="listbox" aria-expanded={open} onClick={flip}>{opts[k]}<svg viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1l4 4 4-4" /></svg></button>
      {open && <ul role="listbox" aria-label="Status">{opts.map((o, i) => <li key={o} role="option" aria-selected={k === i}><button type="button" onClick={() => { setK(i); set(false); }}>{o}</button></li>)}</ul>}
    </div>
  );
}
