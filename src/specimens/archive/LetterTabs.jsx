import { useState } from 'react';
import c from './archive.module.css';

const ENTRIES = { A: ['Abbott', 'Alder'], B: ['Baird', 'Brandt', 'Boyle'], C: ['Cole'], D: ['Dunn', 'Dale'], E: ['Ellis'] };

/* 27 */ export function LetterTabs() {
  const [l, setL] = useState('B');
  return (
    <div className={c.letters}>
      <ul aria-live="polite">{ENTRIES[l].map((e) => <li key={e}>{e}</li>)}</ul>
      <div role="group" aria-label="Index letters">{Object.keys(ENTRIES).map((k) => <button key={k} type="button" aria-pressed={l === k} onClick={() => setL(k)}>{k}</button>)}</div>
    </div>
  );
}
