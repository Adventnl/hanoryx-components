import { useState } from 'react';
import c from './menus.module.css';

/* 42 */ export function FooterMenu() {
  const [k, setK] = useState(0);
  const cols = [['Studio', ['About', 'People']], ['Work', ['Cases', 'Lab']], ['Talk', ['Mail', 'Press']]];
  return (
    <div className={c.site} role="group" aria-label="Footer menu">
      {cols.map(([h, l], i) => (
        <div key={h} data-on={i === k}>
          <button type="button" aria-expanded={i === k} onClick={() => setK(i)}>{h}</button>
          <ul>{l.map((t) => <li key={t}><a href="#site" tabIndex={i === k ? 0 : -1} onClick={(e) => e.preventDefault()}>{t}</a></li>)}</ul>
        </div>
      ))}
    </div>
  );
}
