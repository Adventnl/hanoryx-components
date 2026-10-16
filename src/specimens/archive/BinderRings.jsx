import { useState } from 'react';
import c from './archive.module.css';

/* 08 */ export function BinderRings() {
  const [p, setP] = useState(1);
  return (
    <button type="button" className={c.binder} onClick={() => setP((v) => (v + 1) % 4)} aria-label={`Binder, page ${p + 1} of 4. Click to turn the page`}>
      {[0, 1, 2].map((i) => <i key={i} className={c.leaf} data-turned={i < p} style={{ zIndex: i < p ? i : 4 - i }}><u /><u /><u /></i>)}
      <span className={c.rings}><b /><b /><b /></span>
    </button>
  );
}
