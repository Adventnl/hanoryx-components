import { useState } from 'react';
import c from "../editorial.module.css";

const BIB = [['Dock', 2019, 'A short history of tea'], ['Gate', 2022, 'On belts and platforms'], ['Quiet', 2024, 'Field notes'], ['Atlas', 2021, 'The long way round']];

export function BibliographySort() {
  const [by, setBy] = useState('author');
  const order = [...BIB].sort((a, b) => (by === 'author' ? a[0].localeCompare(b[0]) : b[1] - a[1])).map((r) => r[0]);
  return (
    <div className={c.fig}>
      <ul className={c.bib}>
        {BIB.map(([a, y, t]) => <li key={a} style={{ '--r': order.indexOf(a) }}><b>{a}</b><span>{t}</span><em>{y}</em></li>)}
      </ul>
      <div className={c.pair2} role="radiogroup" aria-label="Sort references">
        {['author', 'year'].map((k) => <button key={k} type="button" role="radio" aria-checked={by === k} className={c.mini} onClick={() => setBy(k)}>{k}</button>)}
      </div>
    </div>
  );
}
