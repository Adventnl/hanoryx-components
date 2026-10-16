import { useState } from 'react';
import { useToggle } from '../../stage/hooks';
import c from './keypads.module.css';

/* 25 */ export function SplitButton() {
  const [open, flip] = useToggle();
  const [pick, setPick] = useState('Publish');
  return (
    <div className={c.split}>
      <button type="button">{pick}</button>
      <button type="button" aria-expanded={open} aria-label="More options" onClick={flip}><svg viewBox="0 0 10 6" aria-hidden="true"><path d="M1 1l4 4 4-4" /></svg></button>
      {open && <ul>{['Publish', 'Schedule', 'Save draft'].map((t) => <li key={t}><button type="button" onClick={() => { setPick(t); flip(); }}>{t}</button></li>)}</ul>}
    </div>
  );
}
