import { useState } from 'react';
import c from './tilt.module.css';

const DRAWERS = [['One', 'The first card, open.'], ['Two', 'A second card, folded.'], ['Three', 'And a third.']];

export function StackAccordion() {
  const [k, setK] = useState(0);
  return (
    <div className={c.fig}>
      <div className={c.acc}>
        {DRAWERS.map(([t, body], i) => (
          <div key={t} className={c.accCard} data-on={i === k}>
            <button type="button" aria-expanded={i === k} onClick={() => setK(i)}>{t}</button>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
