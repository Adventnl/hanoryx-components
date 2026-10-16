import { useState } from 'react';
import c from './fields.module.css';

/* 21 */ export function RadioCards() {
  const [k, setK] = useState(1);
  return (
    <div className={c.plans} role="radiogroup" aria-label="Plan">
      {[['Solo', 'Free'], ['Team', 'Sample'], ['Org', 'Custom']].map(([a, b], i) => <button type="button" key={a} role="radio" aria-checked={k === i} onClick={() => setK(i)}><b>{a}</b><span>{b}</span></button>)}
    </div>
  );
}
