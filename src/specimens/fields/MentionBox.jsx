import { useState } from 'react';
import c from './fields.module.css';

const NAMES = ['Ada', 'Alan', 'Grace', 'Linus', 'Margaret'];

/* 15 */ export function MentionBox() {
  const [t, setT] = useState('Thanks @');
  const open = /@\w*$/.test(t);
  return (
    <div className={c.mention}>
      <input value={t} aria-label="Message with mentions" onChange={(e) => setT(e.target.value)} />
      {open && <ul>{NAMES.map((n) => <li key={n}><button type="button" onClick={() => setT(t.replace(/@\w*$/, `@${n} `))}>@{n}</button></li>)}</ul>}
    </div>
  );
}
